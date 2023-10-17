import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { is_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart";


function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      < Header />
      < Cart />
      < Products products={filteredProducts} />
      {is_DEVELOPMENT && < Footer />}
    </>
  )
}

export default App
