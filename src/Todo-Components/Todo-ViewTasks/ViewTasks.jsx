import { useEffect } from 'react';
import task from '../Todo-AddTask/AddTask'
import taskHelper from '../TodoHelper/ToTaskDTO'

function ViewTasks() {

    let tasks;

    useEffect(()=>{
        tasks = taskHelper.getTasks();
        console.log("Use effects")
    })

    return (
        <>
        
        <ol>{tasks.map((task,key)=>{<li key={key}>{task}</li>})}</ol>
        </>
    );
}

export default ViewTasks;