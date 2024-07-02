import React from "react"
import {type Task as TaskType, type ListOfTasks, TaskId } from "../../types"
import { Task } from "../Task/Task"


interface Props{
    tasks: ListOfTasks
    onToggleCompleteTask: ({id, completed}:Pick<TaskType, 'id' | 'completed'>)=>void
    onRemoveTask: ({id}: TaskId)=> void    
}


export const Tasks: React.FC<Props> = ({ tasks, onRemoveTask, onToggleCompleteTask})=>{

    return (
        <table className="todo-list">
            <tr>
                <td>Id</td>
                <td>Título</td>
                <td>Descripción</td>
                <td>Fecha de creación</td>
                <td>Fecha estimada de finalización</td>
                <td>Estado de la tarea</td>
            </tr>
            {tasks.map(task=>(
                <li key={task.id} className={`${task.completed? 'completed': ''}`}>
                    <Task 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        createdDate={task.createdDate}
                        eta={task.eta}                        
                        completed={task.completed}
                        onToggleCompleteTask={onToggleCompleteTask}
                        taskStatus={task.taskStatus}
                        onRemoveTask={(onRemoveTask)}
                        />                    
                </li>
            ))}
        </table>   
    )
}