import React, { useEffect } from 'react'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        position: 'relative',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '100%'
    }
}

export default function TodoList(props){
    return (
        props.todos.length ? (
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => 
            <TodoItem todo={todo} 
                    index={index} 
                    key={todo.id} 
                    deleteTodo={props.deleteTodo}
                    checkTodo={props.checkTodo} 
                    />) }
        </ul>
        ) : (
            <h3 className='empty-list-label'>Todo list is empty</h3>
        )
    )
}