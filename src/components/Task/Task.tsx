import React from 'react'
import { type Task as TaskType, type TaskId } from '../../types'

interface Props extends TaskType{
    onToggleCompleteTask: ({id, completed}:Pick<TaskType, 'id' | 'completed'>)=>void
    onRemoveTask: ({id}: TaskId)=>void
}


export const Task: React.FC<Props> = ({id, title, description, createdDate, eta, completed, taskStatus,  onRemoveTask, onToggleCompleteTask})=>{

    const handleChangeCheckbock = (event: React.ChangeEvent<HTMLInputElement>):void=>{
        onToggleCompleteTask({
            id,
            completed: event.target.checked
        })
    }



    return(
        <tr>
            <td>
                <input
                    className="toggle"
                    checked={completed}
                    type="checkbox"
                    onChange={handleChangeCheckbock}
                />
            </td>
            <td >{title}</td>
            <td >{description}</td>
            <td >{createdDate.toLocaleDateString()}</td>
            <td >{eta.toLocaleDateString()}</td>
            <td >{taskStatus}</td>
            <td>
                <button
                    className="destroy"
                    onClick={() => {
                        onRemoveTask({ id });
                    }}
                />
            </td>
        </tr>
    )
}