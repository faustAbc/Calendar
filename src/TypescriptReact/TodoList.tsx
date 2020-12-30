import React from 'react';
import { ITodo } from './interfaces';

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number):void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> =({todos, onRemove, onToggle})=>{
    return(
        <ul>
            {todos.map(todo=>{
                const classes = ['todo']
                return(
                    <li className='todo' key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed}/>
                            <span>{todo.title}</span>
                            <i className='material-icons red-text'>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}