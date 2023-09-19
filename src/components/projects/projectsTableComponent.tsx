'use client'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Link,
} from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react";
import { FiUser } from 'react-icons/fi';

export default function ProjectsTableComponent({ projectList }: any) {
    return (
        <TableContainer
            width={"100%"}
        >
            <Table
                variant='simple'
                background={"gray.200"}
            >
                <Thead bg={"blueviolet"}>
                    <Tr>
                        <Th textColor={"white"}>PROJECT NAME</Th>
                        <Th textColor={"white"}>MANAGER</Th>
                        <Th textColor={"white"}>COMPANY</Th>
                        <Th textColor={"white"}>USERS</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {projectList.map((project: any) => {
                        return (
                            <Tr key={project.id}>
                                <Td>
                                    <Link href={`/main/projects/info/${project.id}`}>
                                        <Button>{project.projectName}</Button>
                                    </Link>
                                </Td>
                                <Td>{project.manager}</Td>
                                <Td>{project.company}</Td>
                                <Td><Button
                                    width={"auto"}
                                    minWidth={"100px"}
                                    display="flex"
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                >{project.users}<Icon
                                        width={"2em"}
                                        height={"2em"}
                                        as={FiUser}
                                    /></Button></Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
