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
    <div className="maindiv">
      <section className="animate__animated animate__backInLeft">
        <h1>Todo List</h1>
        <div class="div1">
          <input placeholder="Enter the task to do" onChange={getInp} value={inpVal} id="input" />
          
          <button onClick={add}><i class="fas fa-plus-octagon"></i></button>
          <button onClick={delAll}><i class="fad fa-trash"></i></button>  
          
        </div>
        <div class="tasks" id="tasks">
          <ul >
            {todoArr.map((val, ind) => {
              return <li key={ind} className="animate__animated animate__backInUp"> <p>{val}</p>  <p><i className = "fal fa-edit editIcon" onClick={() => editItem(ind)}></i> <i className = "fal fa-minus-octagon delIcon" onClick={() => removeItem(ind)}></i> </p>   </li>
            })}
          </ul>
        </div>
      </section>
    </div>
  </>
}
export default Input