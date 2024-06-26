import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteJob, updateJob } from "../store/reducer/todoListReducer";
export default function Todolist() {
    const data: any = useSelector(state => state);
    // console.log(11111111,data);
    const disPatch = useDispatch();
    const addTodoList = () => {
        let newJob: any = {
            id: Math.floor(Math.random() * 99999999),
            name: "code redux-toolkit"
        }
        disPatch(addTodo(newJob));
    }
    const handleDelete = (id: number) => {
        disPatch(deleteJob(id))
    }
    const handleUpdate = (job: any) => {
        let newJob = { ...job, name: "học lập trình với redux-toolkit" }
        disPatch(updateJob(newJob));
    }
    return (
        <div>Todolist
            <button onClick={addTodoList}>add</button>
            <ul>
                {data.todolistReducer.jobs.map((job: any) => {
                    return <li key={job.id}>{job.name}
                        <button onClick={() => handleDelete(job.id)}>xóa</button>
                        <button onClick={() => handleUpdate(job)}>update</button>

                    </li>
                })}
            </ul>
        </div>
    )
}