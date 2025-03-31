
import React, {useState } from 'react';


function AddTask() {

    const [tasks,update] = useState([]);

    //let tasks = [];
    let index = 0;

    const addTask = () =>{
        let input = document.getElementById("taskinput");


        update([...tasks,input.value]);

        input.value = "";

        index+=1;
        console.log(tasks);
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