
import React, {useState } from 'react';
import to from '../TodoHelper/ToTaskDTO'


function AddTask() {

    const  [tasks,update] = useState([]);

    //let tasks = [];
    

    const addTask = () =>{
        let input = document.getElementById("taskinput");
        update([...tasks,input.value]);
        input.value = "";

        console.log(tasks);
        to.addTask(input.value);
        // console.log()
    }

    return (<>

    <div>
        <input id = "taskinput" type="text"/>
        <button onClick={addTask}>Add Task</button>
    </div>
    <div>
       <ol>{tasks.map((value,index)=> {return( <li key={index}>{value}</li>)})}</ol> 
    </div>
    </>);

}
export default AddTask;