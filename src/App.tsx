import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType='all'|'completed'|'active'
function App() {

    let [tasks,setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'REACT', isDone: false}
    ]);
    console.log(tasks)
    let [filter,setFilter] = useState<FilterValuesType>('all');
    function removeTask(id:string) {
       let filteredTask=tasks.filter(t=>t.id !== id);
       setTasks(filteredTask);

    }
    function addTask(title:string) {
        let newTask={id: v1(),
            title: title,
            isDone: false};
        let newTasks=[newTask, ...tasks];
        setTasks(newTasks)

    }

    function changeFilter(value:FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodoList=tasks;
    if (filter === 'completed') {
        tasksForTodoList=tasks.filter(t=>t.isDone===true)
    }
    if (filter === 'active') {
        tasksForTodoList=tasks.filter(t=>t.isDone===false)
    }

    // const task2=[
    //     {id:1, title: 'Terminator', isDone: true},
    //     {id:2, title: 'XXX', isDone: false},
    //     {id:3, title: 'Jentelmens of fartune', isDone: true}
    // ]

    return (
        <div className="App">
            <Todolist title='What to learn'
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
            {/*<Todolist title='Songs' tasks={task2}/>*/}


        </div>
    );
}

export default App;
