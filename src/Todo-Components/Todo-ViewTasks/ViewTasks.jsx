
import task from './Todo-AddTask/AddTask'

function ViewTasks() {

    return (
        <>
        <ol>{task.tasks.map((value,key)=>{return(<li key={index}>{value}</li>)})}</ol>
        </>
    );
}

export default ViewTasks;