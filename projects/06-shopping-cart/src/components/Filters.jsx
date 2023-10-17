import { useState, useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";
export function Filters() {
    const { filters, setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilteredId = useId()
    const categoryFilteredId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        //estamos pasando la funcion de actualizar estado nativa de React a un componente hijo
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price"> Price </label>
                <input 
                    type="range" 
                    name="price" 
                    id={minPriceFilteredId} 
                    min={0}
                    max={1000}
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>$ {filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilteredId}>Categoría</label>
                <select name="category" id={categoryFilteredId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>

        </section>
    )
}