import React, {useState} from 'react';
import {Table} from "./components/Table";
import {ButtonBox} from "./components/ButtonBox";

export type initialStateType = {
    name: string
    points: number
}


function App() {

    let [tableRows, setTableRows] = useState<Array<initialStateType>>([
        {name: "Maxim", points: 2},
        {name: "Dmitry", points: 5},
        {name: "Alexey", points: 4},
    ])

    const [currentName, setCurrentName] = useState("")
    const [currentPoints, setCurrentPoints] = useState("")


    const AddNewValueToRows = (name: string, points: number) => {
        setTableRows([...tableRows, {name, points}])
    }

    const ClearTableRows = () => {
        setTableRows([])
    }

    const PreviousValueRows = (state: initialStateType[]) => {
        let stateCopy = [...state]
        stateCopy.pop()
        setTableRows(stateCopy)
    }


    return (
        <div>
            <Table
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
        </div>
    );
}

export default App;

