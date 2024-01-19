import { todoTitle } from "../assets/types"
import { useState } from 'react'

interface Props {
    saveTodo: ({ title }: todoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputvalue, setInputValue]= useState('.')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo({title: inputvalue})
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="new-todo" 
                value={inputvalue}
                onChange={(e)=>{ setInputValue(e.target.value)}}
                placeholder="Que quieres hacer ?"
                autoFocus
            />
        </form>
    )
}