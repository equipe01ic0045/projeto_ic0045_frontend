'use client';

import { Button, Box, Text, useToast } from "@chakra-ui/react";
import Clock from "./clockComponent";
import { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { FiUser } from 'react-icons/fi';

export default function RecordCard() {

    
    const toast = useToast();

    const [newRecord, setRecord] = useState<any>({
        time:'',
        date:''
    })
    function newRecordHandler() {
        setRecord({
            time : new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        })
        toast({
            title: 'registro de horario efetuado',
            description: "",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: "top-right"
          })
    }

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"30%"}
            height={"50%"}
            // background={"blueviolet"}
            borderRadius={"1em"}
            gap={"2em"}
        >
            <Icon 
            as={FiUser} 
            width={"50%"} 
            height={"50%"} 
            />
            <Clock />
            <Button 
            onClick={newRecordHandler}
            minHeight={"50px"}
            background={"blueviolet"}
            color={"white"}
            >
                Registro de Tempo
            </Button>
            <Text fontSize={"md"}>
                {newRecord.time ? newRecord.time + "  " + newRecord.date  : ""}
            </Text>
        </Box>
    );
}