'use client';
import caseImg from '../../../public/icons/case_01.svg';
import clockImg from '../../../public/icons/clock_01.svg';
import { Box, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function SideMenuComponent() {
    const menuCase = caseImg;
    const menuClock = clockImg;
    const pages = [
        {
            id: 1,
            name: "Projects",
            link: "projects"
        }, {
            id: 2,
            name: "Time Records",
            link: "time-records"
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
                    href={`/${item.link}`}
                >
                    <Button
                        bg={"white"}
                        borderRadius={"5px"}
                        padding={"1em"}
                        width={"150px"}
                    >
                        <Image src={menuCase}/>
                        {item.name}
                    </Button>
                </Link>
            })}
        </Box>
    );
}
