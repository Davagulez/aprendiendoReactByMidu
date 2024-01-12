import { useState } from "react"
import { Todos } from "./assets/components/Todos"
import { FilterValue, type todoId, type Todo as TodoType } from "./assets/types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./assets/components/Footer"
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
  const [filterSelected, setFilterSelected]= useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if(filterSelected == TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected == TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Todos
      onToggleCompleted={handleComplete}
      onRemoveTodo = {handleRemove}
      todos={filteredTodos}/>

      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
