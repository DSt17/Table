import React from "react";
import {initialStateType} from "../App";

import s from "./table.module.css"

type TablePropsType = {
    tableRows: Array<initialStateType>
    currentName: string
    setCurrentName: (value: string) => void
    currentPoints: string
    setCurrentPoints: (value: string) => void
}

const TableNoMemoized = (props: TablePropsType) => {

    return (
        <div className={s.tableBox}>
            <table>
                <tr>
                    <th>student's name</th>
                    <th>points</th>
                </tr>
                {
                    props.tableRows.map(el =>
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.points}</td>
                        </tr>
                    )
                }
                <tr>
                    <td>
                        <input
                            placeholder={"enter student name.."}
                            value={props.currentName}
                            onChange={(e) => {
                                props.setCurrentName(e.currentTarget.value)
                            }}/>
                    </td>
                    <td>
                        <input
                            placeholder={"enter points.."}
                            value={props.currentPoints}
                            onChange={(e) => {
                                props.setCurrentPoints(e.currentTarget.value)
                            }}/>
                    </td>
                </tr>
            </table>
        </div>


    )
}
export const Table = React.memo(TableNoMemoized)