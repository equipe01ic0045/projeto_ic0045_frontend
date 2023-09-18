'use client';
import { Box, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {FiBriefcase} from 'react-icons/fi'
import {FiClock} from 'react-icons/fi'
import Link from "next/link";
import React from "react";

export default function SideMenuComponent() {
    const pages = [
        {
            id: 1,
            name: "Projects",
            link: "projects",
            icon: FiBriefcase
        }, {
            id: 2,
            name: "Time Records",
            link: "time-records",
            icon: FiClock
        }
    ]
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            gap={"0.5em"}
            bg={"blueviolet"}
            padding={"0.5em"}
            width={"20%"}
        >
            {pages.map((item) => {
                return <Link
                    key={item.id}
                    href={`/main/${item.link}`}
                >
                    <Button
                        bg={"white"}
                        borderRadius={"5px"}
                        padding={"1em"}
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"start"}
                        gap={"0.5em"}
                        width={"auto"}
                        minWidth={"175px"}
                    >
                        <Icon 
                        width={"2em"}
                        height={"2em"}
                         as={item.icon}
                         />
                        {item.name}
                    </Button>
                </Link>
            })}
        </Box>
    );
}
