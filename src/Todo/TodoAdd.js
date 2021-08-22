import React, {useState} from 'react'

export default function TodoAdd({ createTodo }){
    const [value, setValue] = useState('')

    function addTodo(event){
        if(value.trim()){
            createTodo(value)
            setValue('')
        }
    }

    return (
        <div className='add-todo-container'>
            <input value={value} placeholder='Enter your todo' className='message' onChange={(event) => setValue(event.target.value)}/>
            <button onClick={addTodo} autoFocus={true}>Add todo</button>
        </div>
    )
}