import React, {useState} from 'react';
import {StudentsTable} from "./components/Table";
import {ButtonBox} from "./components/ButtonBox";
import {Paper} from "@mui/material";


export type initialStateType = {
    id: number
    name: string
    points: number
}


function App() {

    let [tableRows, setTableRows] = useState<Array<initialStateType>>([
        {id: 1, name: "Maxim", points: 6},
        {id: 2, name: "Dmitry", points: 10},
        {id: 3, name: "Alexey", points: 8},
        {id: 4, name: "Kristina", points: 4}
    ])

    const [currentName, setCurrentName] = useState("")
    const [currentPoints, setCurrentPoints] = useState("")


    const AddNewValueToRows = (name: string, points: number) => {
        setTableRows([...tableRows, {id: new Date().getTime(), name, points}])
    }

    const ClearTableRows = () => {
        setTableRows([])
    }

    const PreviousValueRows = (state: initialStateType[]) => {
        let stateCopy = [...state]
        stateCopy.pop()
        setTableRows(stateCopy)
    }
    const averageGPA = tableRows.reduce((acc, student) => acc + student.points / tableRows.length, 0);

    return (
        <div>
            <div style={{padding: "50px", width: "500px"}}>
                <div style={{height: "50px", width: "110px", fontSize: "13px"}}>
                    <Paper elevation={3}>
                        <div>{"Total students: " + tableRows.length}</div>
                        <div> {"GPA: " + averageGPA.toFixed(2)}</div>
                    </Paper>
                </div>
                <Paper elevation={12}>
                    <StudentsTable
                        tableRows={tableRows}
                        currentName={currentName}
                        setCurrentName={setCurrentName}
                        currentPoints={currentPoints}
                        setCurrentPoints={setCurrentPoints}
                    />
                    <ButtonBox
                        setCurrentName={setCurrentName}
                        setCurrentPoints={setCurrentPoints}
                        AddNewValueToRows={AddNewValueToRows}
                        currentName={currentName}
                        currentPoints={currentPoints}
                        PreviousValueRows={PreviousValueRows}
                        tableRows={tableRows}
                        ClearTableRows={ClearTableRows}
                    />
                </Paper>
            </div>

        </div>


    );
}

export default App;

