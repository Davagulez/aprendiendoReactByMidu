import { useState } from "react"
import { Todos } from "./assets/components/Todos"
const mockTodos = [
  {
    id:'1',
    title:'Aprender React con typescript',
    completed: false,
  },
  {
    id:'2',
    title:'Mandar correo a taverniti',
    completed: true,
  },
  {
    id:'3',
    title:'buscar un neurologo',
    completed: false,
  }
]

const App: React.FC = () =>  {
  const [todos] = useState(mockTodos)
  return (
    <div className="todoapp">
      <Todos todos={todos}/>
    </div>
  )
}

export default App
