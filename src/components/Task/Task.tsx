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
        <tr className='todo-list'>
            <td>
                <input
                    className="toggle"
                    checked={completed}
                    type="checkbox"
                    onChange={handleChangeCheckbock}
                />
         
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