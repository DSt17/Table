import React from "react";
import {initialStateType} from "../App";
import {Button} from "@mui/material";
import s from './buttonBox.module.css'

type ButtonBoxPropsType = {
    setCurrentName: (value: string) => void
    setCurrentPoints: (value: string) => void
    AddNewValueToRows: (name: string, points: number) => void
    currentName: string
    currentPoints: string
    PreviousValueRows: (state: initialStateType[]) => void
    tableRows: Array<initialStateType>
    ClearTableRows: () => void
}
export const ButtonBox = (props: ButtonBoxPropsType) => {

    return (
        <div className={s.buttonBox}>
            <Button variant="contained" color="primary" size={"small"} className={s.button}
                    style={{width: "30px"}}
                    onClick={() => {
                        props.AddNewValueToRows(props.currentName, Number(props.currentPoints))
                        props.setCurrentName('')
                        props.setCurrentPoints('')
                    }}
                    disabled={!(props.currentName.trim().length > 0 && props.currentPoints.trim().length > 0)}
            >Add
            </Button>
            <Button variant="contained" color="primary" size={"small"} className={s.button}
                    onClick={() => props.PreviousValueRows(props.tableRows)}>Previous value</Button>
            <Button variant="contained" color="primary" size={"small"}
                    onClick={() => props.ClearTableRows()}>Clear table</Button>
        </div>
    )
}

