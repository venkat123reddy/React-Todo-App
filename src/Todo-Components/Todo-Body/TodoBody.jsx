import AddTask from "../Todo-AddTask/AddTask";
import ViewTasks from "../Todo-ViewTasks/ViewTasks";



function TodoBody(props) {

    return (
        <>
        <div>
            <AddTask/>
            <ViewTasks/>
        </div>
        </>
    );

}
export default TodoBody;