import React, {useState} from 'react';
import {Table} from "./components/Table";

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
                AddNewValueToRows={AddNewValueToRows}
                PreviousValueRows={PreviousValueRows}
                ClearTableRows={ClearTableRows}
            />
        </div>
    );
}

export default App;

