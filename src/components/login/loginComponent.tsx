'use client';
import UserService from "@/services/userService";
import { Box, Button, Text, Input, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginComponent() {
    const toast = useToast()
    const router = useRouter()
    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    )

    const userService = new UserService();

    function inputHandler(event: any) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value },)
    }

    function loginHandler() {
        
        if(user.email == 'fake@mail.com' && user.password == '123456'){
            console.log('user authenticated')
            router.push('main/projects')
        }
        else {
            toast({
                title: 'login falhou',
                description: "",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "top-right"
              })
        }

    }

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            gap={"0.5em"}
            padding={"0.5em"}
            width={"100%"}
        >
            <Text fontSize={'6xl'}>pontocerto.ic</Text>
            <Text fontSize={'2xl'}>Bem Vindo, Entre !</Text>


            <Box 
            display={'flex'}
            flexDirection={'column'}
            gap={'1em'}
            >
                <Input
                    placeholder="email"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={inputHandler}
                />
                <Input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={inputHandler}
                />
                <Button 
                background={'blueviolet'}
                textColor={'white'}
                onClick={loginHandler}
                >
                    login
                </Button>
                <Box
                display={'flex'}
                flexDirection={'row'}
                gap={'1em'}
                >
                    <Text>
                        nao é registrado ?
                    </Text>
                    <Link href={"/registration"}>
                        <Text textColor={'blue'}>registre-se</Text>
                        </Link>
                </Box>
            </Box>
        </Box>
    );
}
