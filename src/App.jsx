import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./layout/main-layot"
import { Home } from "./pages/home/home"
import { Product } from "./pages/home/product"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="product" element={<Product/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
