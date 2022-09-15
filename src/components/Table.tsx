import React, {useState} from "react";
import {Row} from "./Row";
import {initialStateType} from "../App";

import s from "./table.module.css"

type TablePropsType = {
    tableRows: Array<initialStateType>
    AddNewValueToRows: (name: string, points: number) => void
    PreviousValueRows: (state: initialStateType[]) => void
    ClearTableRows: () => void
}


const TableNoMemoized = (props: TablePropsType) => {

    console.log("TABLE")

    const [CurrentName, setCurrentName] = useState("")
    const [CurrentPoints, setCurrentPoints] = useState("")


    return (
        <div className={s.tableBox}>
            <table>
                <tr>
                    <th>student's name</th>
                    <th>points</th>
                </tr>
                {
                    props.tableRows.map(el =>
                        <Row
                            name={el.name}
                            points={el.points}
                        />
                    )
                }
                <tr>
                    <td>
                        <input
                            placeholder={"enter student name.."}
                            value={CurrentName}
                            onChange={(e) => {
                                setCurrentName(e.currentTarget.value)
                            }}/>
                    </td>
                    <td>
                        <input
                            placeholder={"enter points.."}
                            value={CurrentPoints}
                            onChange={(e) => {
                                setCurrentPoints(e.currentTarget.value)
                            }}/>
                    </td>
                </tr>
            </table>
            <div>
                <button onClick={() => {
                    props.AddNewValueToRows(CurrentName, Number(CurrentPoints))
                    setCurrentName('')
                    setCurrentPoints('')
                }
                }

                >Add
                </button>
                <button onClick={() => props.PreviousValueRows(props.tableRows)}>PreviousValue</button>
                <button onClick={() => props.ClearTableRows()}>CLear table</button>
            </div>
        </div>


    )
}
export const Table = React.memo(TableNoMemoized)