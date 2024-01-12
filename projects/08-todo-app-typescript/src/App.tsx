import { useState } from "react"
import { Todos } from "./assets/components/Todos"
import { type todoId, type Todo as TodoType } from "./assets/types"
const mockTodos = [
  {
    id: 1,
    title:'Aprender React con typescript',
    completed: false,
  },
  {
    id: 2,
    title:'Mandar correo a taverniti',
    completed: true,
  },
  {
    id: 3,
    title:'buscar un neurologo',
    completed: false,
  }
]

const App = (): JSX.Element =>  {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: todoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed' >): void => {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }  
        }
        return todo
      })

      setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
      onToggleCompleted={handleComplete}
      onRemoveTodo = {handleRemove}
      todos={todos}/>
    </div>
  )
}

export default App
