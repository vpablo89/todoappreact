import { type TASK_FILTER } from "./consts"

export interface Task  {
    id: number
    title: string
    description: string
    createdDate: Date
    eta: Date    
    completed: boolean
    taskStatus: taskStatus
}

export type TaskId = Pick<Task, 'id'>

export type TaskTitle = Pick<Task, 'title'>

export type taskDescription = Pick<Task, 'description'>

export type taskCreatedDate = Pick<Task, 'createdDate'>

export type taskEta = Pick<Task, 'eta'>

export type taskCompleted = Pick< Task, 'completed'>

export type taskTaskStatus = Pick<Task, 'taskStatus'>

export type ListOfTasks = Task[]

export type FilterValue = typeof TASK_FILTERS[keyof typeof TASK_FILTER]
