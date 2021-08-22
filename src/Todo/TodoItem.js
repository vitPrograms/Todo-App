import React from 'react'

export default function TodoItem({todo, index, checkTodo, deleteTodo}){
    return (
        todo.completed ? (
            <li className='item-list completed'>
                <span onClick={() => checkTodo(todo.id)}>
                    <strong>{index + 1}</strong> 
                    {todo.title}
                </span>
                <button className='delete-todo-icon' onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
        ) : (
            <li className='item-list'>
                <span onClick={() => checkTodo(todo.id)}>
                    <strong>{index + 1}</strong> 
                    {todo.title}
                </span>
                <button className='delete-todo-icon' onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
        )
    )
}