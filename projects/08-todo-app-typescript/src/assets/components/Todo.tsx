import { Todo as TodoType } from "../types"
import { todoId } from "../types"

interface Props extends TodoType {
    onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed' >) => void
    onRemoveTodo: ({ id }: todoId) => void
}


export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleted}) => {
    
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleted({
            id,
            completed: event.target.checked
        })
    }
    
    return (
        <div className="view">
            <input 
            type="checkbox" 
            className="toggle"
            checked={completed}
            onChange={handleChangeCheckbox}  
            />
            <label htmlFor="">{title}</label>
            <button className="destroy" onClick={()=> onRemoveTodo({ id })}></button>
        </div>
    )
}