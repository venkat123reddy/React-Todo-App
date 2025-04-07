import { useState } from "react";
import AddTask from "../Todo-AddTask/AddTask";
import ViewTasks from "../Todo-ViewTasks/ViewTasks";



function TodoBody(props) {
    const [toggle, updateToggle] = useState(true);

    const toggleClick = ()=>{
        if(toggle==false) {
            updateToggle(true);
        } else {
            updateToggle(false);
        }

    }
    return (

       
        <>
        <div>
        <button onClick={toggleClick}>ADD Task</button>
        <button onClick={toggleClick}>View Tasks</button>
        <div>
           {toggle? <><AddTask/></> : <><ViewTasks/></>}
        </div>
        </div>
        </>
    );

}
export default TodoBody;