import { FC, useState } from "react";
import React from 'react';
import TodoForm from "./TodoForm";
import { TodoList } from "./TodoList";
import { ITodo } from "./interfaces";

const TypescriptReact: FC = () =>{
    const [todos, setTodos] = useState<ITodo[]>([])

    const addHandler = (title: string)=>{
        console.log('Add new todo', title);
        const newTodo: ITodo ={
            title: title,
            id: Date.now(),
            completed: false
        }
        //setTodos([newTodo, ...todos])
        setTodos(prev =>[newTodo,...prev])
    }
    const toggleHandler = (id:number)=>{

    }
    const removeHandler = (id:number) =>{
        
    }
    return (
    <>
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React + Typescript</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Cписок дел</a></li>
                    <li><a href="/">О нас</a></li>
                </ul>
            </div>
        </nav>
        <TodoForm onAdd = {addHandler}/>
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    </>
  )
}

export default TypescriptReact;