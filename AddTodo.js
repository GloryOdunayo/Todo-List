import { useState } from "react"
const AddTodo = ({pushTodo}) => {
    const [todo, settodo] = useState("")
    
  return (
    <>
        <h1>Add Todo</h1>
        <input type="text"  placeholder="Todo Item" className="form-control my-2" onChange={(e)=>settodo(e.target.value)}/>
        <button onClick={()=>pushTodo(todo)} className="btn btn-info w-100">Add Todo</button>
    </>
  )
}

export default AddTodo