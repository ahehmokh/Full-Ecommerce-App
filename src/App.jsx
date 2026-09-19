
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from "react-router-dom"
import NavBar from "./Pages/Navbar/Navbar"
import Home from "./Pages/HomePage/Home"
import Shop from "./Pages/Shop/Shop"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"
import Cart from "./Pages/Cart/Cart"

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path="Shop" element={<Shop/>}/>
          <Route path="Product/:id" element={<ProductDetails/>}/>
          <Route path="Cart" element={<Cart/>}/>
        </Route>
      )
    )

  return (

   <RouterProvider router={router}/>
  )
}

export default App
