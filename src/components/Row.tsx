import React from "react";



type RowPropsType = {
    name: string
    points: number
}



const RowNoMemoized = (props:RowPropsType) => {
  return(
      <tr>
          <td>{props.name}</td>
          <td>{props.points}</td>
      </tr>
  )
}
export const Row = React.memo(RowNoMemoized)