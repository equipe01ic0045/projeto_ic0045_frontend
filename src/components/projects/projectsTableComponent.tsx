'use client'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
} from '@chakra-ui/react'

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
                                <Td><Button>{project.projectName}</Button></Td>
                                <Td>{project.manager}</Td>
                                <Td>{project.company}</Td>
                                <Td><Button>{project.users}</Button></Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
