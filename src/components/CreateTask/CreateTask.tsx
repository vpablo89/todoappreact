import React, { useState } from "react";
import { Task } from "../../types"; 
import { taskStatus } from "../../enums";

interface Props{
    saveTask: (        
        task: Task
    )=>void
}

export const CreateTask: React.FC<Props> =({saveTask})=>{

const [inputTitleValue, setInputTitleValue] = useState('')
const [inputDescriptionValue, setInputDescriptionValue] = useState('Descripción de la tarea')
const [inputCreatedDAte, setInputCreatedDate] = useState(new Date(Date.now()))


const handleKeyDown = (event: React.KeyboardEventHandler<HTMLInputElement>): void=> {
    event.preventDefault()
    saveTask({
        id: 0,
        title: inputTitleValue,
        description: inputDescriptionValue,
        createdDate: new Date(Date.now()),
        eta: new Date(Date.UTC(2024,7,25)),
        completed: false,
        taskStatus: taskStatus.ON_TIME
    })
    setInputTitleValue('')    
    
}

    return(
        <form onSubmit={handleKeyDown}>  
              
        <input
            className="new-todo"
            value={inputTitleValue}
            onChange={(event)=>{setInputTitleValue(event.target.value)}}
            onKeyDown={()=>{}}
            placeholder="Título de la tarea?"
            autoFocus
        />
        <input
            className="new-todo"
            value={inputDescriptionValue}            
            onChange={(event)=>{setInputDescriptionValue(event.target.value)}}
            onKeyDown={()=>{}}
            placeholder="Descripción de la tarea"
            autoFocus
        />        
        <input
            className="new-todo"
             name="eta"
            type='date'
            value={inputCreatedDAte}            
            onChange={(event)=>{setInputCreatedDate(event.target.value)}}
            onKeyDown={()=>{}}
            placeholder="Fecha estimada de finalización"
            autoFocus
        />
       
        </form>    
    )
}

