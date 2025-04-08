
import React, {useState,useEffect } from 'react';
import to from '../TodoHelper/ToTaskDTO'
import taskHelper from '../TodoHelper/ToTaskDTO'


function AddTask() {

    const  [tasks,update] = useState([]);

    //let tasks = [];

     useEffect(()=>{
            console.log("Use effects");
            update(taskHelper.getTasks())
            console.log(tasks);
        })
    

    const addTask = () =>{
        let input = document.getElementById("taskinput");
        update([...tasks,input.value]);
       

        console.log(input.value);
        to.addTask(input.value);
        input.value = "";
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