import { useState } from "react";
import React from "react";
function Input() {
  const [inpVal, setInpVal] = useState("")
  const [todoArr, setTodoArr] = useState([])

  function getInp(e) {
    setInpVal(e.target.value)
  }
  function add() {
    setTodoArr([...todoArr, inpVal])
    setInpVal("")
  }
  function delAll() {
    setTodoArr([])
  }
  function removeItem(ind) {

    let arr = [...todoArr]
    arr.splice(ind, 1)
    setTodoArr(arr)

  }
  function editItem(ind) {
    let arr = [...todoArr]
    let indVal = arr.at(ind)
    indVal = prompt("Enter the updated value", indVal)
    arr.splice(ind, 1, indVal)
    setTodoArr(arr)
  }

  return <>

    <input placeholder="Enter the task to do" onChange={getInp} value={inpVal} />
    <button onClick={add}>Add</button>
   { <button onClick={delAll}>Delete All</button>}
    <ul >
      {todoArr.map((val, ind) => {
        return <li key={ind}>{val} <button onClick={() => editItem(ind)}>Edit</button> <button onClick={() => removeItem(ind)}>Delete</button>  </li>
      })}
    </ul>
  </>
}
export default Input