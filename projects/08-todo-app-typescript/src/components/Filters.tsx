import { FILTERS_BUTTONS } from "../consts"
import { type FilterValue } from "../assets/types"

interface Props {
    filtersSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = (
    { filtersSelected, handleFilterChange }
) => {
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filtersSelected
                    const className = isSelected ? 'selected' : ''
                    return (
                        <li key={key}>
                            <a
                                href={href}
                                className={className}
                                onClick={(event) => {
                                    event.preventDefault()
                                    handleFilterChange(key as FilterValue)
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}