import React, { useState } from 'react'
const DisplayTodo = ({allTodo,count,setcount,setallTodo}) => {
  console.log(allTodo)
  
  const [editedIndex, seteditedIndex] = useState(0)
  // const [Todo, setTodo] = useState([]);

  const delet = (index) => {
    let addedTodo = [...allTodo]
    addedTodo.splice(index,1)
    setallTodo(addedTodo)
    setcount (allTodo.length-1)
}
const editUser = (index)=>{
    seteditedIndex(index)
}
const updateDetails = ()=>{
    let updatedDetails = [...allTodo]
    updatedDetails[editedIndex] = {allTodo}    
}
  return (
    <>
      <h1>Display Todo</h1>
      
      <div className='fw-3 fs-3' align='center'>You have {count} pending task(s)</div>
      <div id="disp"></div>
      {allTodo.map((todo,index)=>(
        <table className='table table-striped'>
        <tr className="text-warning text-center">
            <td>{index+1}</td>
            <td>{todo}</td>
            {/* <td>{todo.Date()}</td> */}
            <td>
                <button className="btn btn-warning mx-2" data-toggle="modal"data-target="#exampleModal" onClick={()=>editUser(index)}>Edit</button>
                <button className="btn btn-danger mx-2" onClick={()=>delet(index)}>Delete</button>
            </td>
        </tr>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Details for {editedIndex} </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="text"  className="form-control my-2"  placeholder={allTodo[editedIndex]} onChange={(e)=>setallTodo(e.target.value)}
                        />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={updateDetails} data-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <div key={index}>
          <div>{todo}</div>
        </div> */}
    </table>          
      ))}
    </>
  )
}

export default DisplayTodo