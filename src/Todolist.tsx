import React, {ChangeEvent, KeyboardEvent} from "react";
import {FilterValuesType} from "./App";


export type TasksType = {
    id: string
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = React.useState('')
    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyDownHendler=(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')

        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }
    const onAllClickHandler=() => {props.changeFilter('all')}
    const onActiveClickHandler=() => {props.changeFilter('active')}
    const onCompletedClickHandler=() => {props.changeFilter('completed')}
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHendler}
                />
                <button onClick={addTask}>+
                </button>
            </div>

            <ul>
                {props.tasks.map((t: TasksType) => {
                    const onRemoveHandler=() => {props.removeTask(t.id)}
                        return <li key={t.id}><input type='checkbox' checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onRemoveHandler}>x</button>

                        </li>
                    }
                )
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>

            </div>
        </div>
    )
}
