import { useEffect, useState } from 'react';
import task from '../Todo-AddTask/AddTask'
import taskHelper from '../TodoHelper/ToTaskDTO'

function ViewTasks() {
    
    const [tasks, updateTasks] = useState([]);
    useEffect(()=>{
        console.log("Use effects");
        updateTasks(taskHelper.getTasks())
        console.log(tasks);
    })

    const removeTask = (task)=> {
        taskHelper.removeTask(task);
        console.log("remove..task")
        updateTasks(taskHelper.getTasks());

    }

    return (
        <>
        
        <ol>{tasks.map((task,k)=>{
            console.dir(task);
             return <li key={k}>{task} 
             
             <button onClick={removeTask(task)}>
                Remove Task
             </button>
             <button>
                Change Status
             </button>
             
             </li>})}</ol>;
        </>
    );
}

export default ViewTasks;