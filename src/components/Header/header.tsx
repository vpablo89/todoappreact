import React from "react"
import { type TaskTitle } from "../../types"
import { CreateTask } from "../CreateTask/CreateTask"

interface Props {
    onAddTask: ({title}: TaskTitle)=>void
}

export const Header: React.FC<Props> = ({ onAddTask})=>{

    return(
        <header className="header">
            <h1>Task<img
                style={{width: '60px', height: 'auto'}}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' /></h1>
        
        <CreateTask saveTask={onAddTask}/>
       
        
        </header>
    )



}