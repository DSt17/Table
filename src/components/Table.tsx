import React, {useState} from "react";
import {initialStateType} from "../App";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";

type TablePropsType = {
    tableRows: Array<initialStateType>
    currentName: string
    setCurrentName: (value: string) => void
    currentPoints: string
    setCurrentPoints: (value: string) => void
}

export const StudentsTable = (props: TablePropsType) => {

    const [label, setLabel] = useState("Enter student's name..")

    return (
        <TableContainer>
            <Table sx={{'&:last-child td': {padding: "5px", textAlign: "center"}}}>
                <TableHead>
                    <TableRow sx={{'&:last-child th': {padding: "5px", textAlign: "center", fontWeight: "bold"}}}>
                        <TableCell>Student's name</TableCell>
                        <TableCell>Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tableRows.map(el =>
                        <TableRow key={el.id}>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>{el.points}</TableCell>
                        </TableRow>
                    )
                    }
                    <TableRow>
                        <TableCell>
                            <TextField id="outlined-basic" label={label} variant="outlined"
                                       size={"small"}
                                       color={label === "Enter student's name.." ? "primary" : "error"}
                                       value={props.currentName}
                                       onChange={(e) => {
                                           if (!Number(e.currentTarget.value)) {
                                               props.setCurrentName(e.currentTarget.value)
                                               setLabel("Enter student's name..")
                                           } else {
                                               setLabel("Incorrect value!")
                                           }
                                       }}/>
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" label="enter points..(number)" variant="outlined"
                                       size={"small"}
                                       type={"number"}
                                       value={props.currentPoints}
                                       onChange={(e) => {
                                           props.setCurrentPoints(e.currentTarget.value)
                                       }}/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    )
}
