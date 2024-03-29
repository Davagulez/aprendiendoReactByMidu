import { FilterValue } from "../assets/types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void 
}

export const Footer: React.FC<Props> = ({
    activeCount,
    completedCount,
    filterSelected,
    onClearCompleted,
    handleFilterChange
}) => {
    return (
        <footer className="footer">
            
            <span className="todo-count">
                <strong>{activeCount}</strong> Tareas pendientes
            </span>
            
            <Filters
                filtersSelected={filterSelected}
                handleFilterChange={handleFilterChange}
            />

            {
                completedCount > 0 && (
                    <button 
                    className="clear-completed"
                    onClick={onClearCompleted}
                    >
                        Borrar completadas
                    </button>
                )
            }

        </footer>

    )
}