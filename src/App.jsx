/* eslint-disable react/prop-types */
import { useState } from "react"
import { SearchBar } from "./components/forms/SearchBar"
import { ProductTable } from "./components/products/ProductTable"
import { PRODUCTS } from "./components/data/products"

function App() {

  const [search, setSearch] = useState('')
  const [showStockedOnly, setShowStockedOnly] = useState(false)

  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) {
      return false
    }

    if (search && !product.name.includes(search)) {
      return false
    }

    return true
  })

  return <div className="container-my-3">
    <SearchBar showStockedOnly={showStockedOnly} onStockedOnlyChange={setShowStockedOnly} search={search} onSearchChange={setSearch}  />
    <ProductTable products={visibleProducts}/>
  </div>
}


export default App
