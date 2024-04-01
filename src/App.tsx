import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

export type FilterValuesType='all'|'completed'|'active'
function App() {

    let [tasks,setTasks] = useState<Array<TasksType>>([
        {id:1, title: 'CSS', isDone: true},
        {id:2, title: 'JS', isDone: true},
        {id:3, title: 'REACT', isDone: false}
    ]);
    let [filter,setFilter] = useState<FilterValuesType>('all');
    function removeTask(id:number) {
       let filteredTask=tasks.filter(t=>t.id !== id);
       setTasks(filteredTask);

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
                      changeFilter={changeFilter}/>
            {/*<Todolist title='Songs' tasks={task2}/>*/}


        </div>
    );
}

export default App;
