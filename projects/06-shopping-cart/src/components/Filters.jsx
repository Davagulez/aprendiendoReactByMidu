import "./Filters.css";
export function Filters() {
    return (
        <section className="filters">
            <div>
                <label htmlFor="price"> Price </label>
                <input 
                    type="range" 
                    name="price" 
                    id="price" 
                    min={0}
                    max={1000}
                />
            </div>

            <div>
                <label htmlFor="category">Categoría</label>
                <select name="category" id="category">
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>

        </section>
    )
}