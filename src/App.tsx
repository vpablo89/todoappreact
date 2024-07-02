import React, { useState } from "react"
import { Tasks } from "./components/Tasks/Tasks"
import { taskStatus } from "./enums"
import {FilterValue, ListOfTasks, Task, TaskTitle, type TaskId, type Task as TaskType} from "./types" 
import { TASK_FILTER } from "./consts"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/header"

const mockTasks= [
  {
    id: 1,
    title: "Tarea1",
    description: "Descripcion1",
    createdDate: new Date(Date.now()),
    eta: new Date(Date.UTC(2024,6,25)),   
    completed: true,
    taskStatus: taskStatus.ON_TIME
  },
  {
    id: 2,
    title: "Tarea2",
    description: "Descripcion2",
    createdDate: new Date(Date.now()),
    eta: new Date(Date.UTC(2024,6,25)),   
    completed: false,
    taskStatus: taskStatus.ON_TIME
  },
  {
    id: 3,
    title: "Tarea3",
    description: "Descripcion3",
    createdDate: new Date(Date.now()),
    eta: new Date(Date.UTC(2024,6,25)),   
    completed: false,
    taskStatus: taskStatus.ON_TIME
  }
]

const App = (): JSX.Element=> {

  const [tasks, setTasks] = useState(mockTasks)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TASK_FILTER.ALL)


  const handleRemove = ({id}: TaskId): void=>{
    const newTasks = tasks.filter(task => task.id != id)
    setTasks(newTasks) 
  }

  const handleCompleted = (
    { id, completed}: Pick<TaskType, 'id' | 'completed'>
  ): void=>{
      const newTasks: ListOfTasks = tasks.map(task=>{
        if(task.id === id){
          return{
            ...task,
            completed
          }
        }
        return task
      })
      setTasks(newTasks)
    }

  
  
  const handleFilterChange = (filter: FilterValue): void=>{
    setFilterSelected(filter)
  } 

  const handleRemoveAllCompleted = (): void =>{
    const newTasks = tasks.filter(tasks=> !tasks.completed)
    setTasks(newTasks)
  }
  
  const activeCount = tasks.filter(task=>!task.completed).length
  const completedCount = tasks.length - activeCount

  const filteredTasks = tasks.filter(task=>{
    if(filterSelected == TASK_FILTER.ACTIVE) return !task.completed
    if(filterSelected == TASK_FILTER.COMPLETED) return task.completed

    return task
  })

  const handleAddTask = ({title}: TaskTitle):void=>{

      
      const newTask: Task = {
        title,
        id: Math.random(),
        completed: false,
        description: 'descripcion generica',
        createdDate: new Date(Date.now()),
        eta: new Date(),
        taskStatus: taskStatus.ON_TIME
      }
      const newTasks: ListOfTasks = [...tasks, newTask]
      setTasks(newTasks)

  }


  return (
    <div className="todoapp">
      <Header onAddTask={handleAddTask} />
      <Tasks
        onToggleCompleteTask={handleCompleted} 
        onRemoveTask={handleRemove}
        tasks={filteredTasks}
      />
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        />
    </div>
   
  )
}

export default App
