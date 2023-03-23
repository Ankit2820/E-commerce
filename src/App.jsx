import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Logins from "./pages/Logins";
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
function App() {
const router = createBrowserRouter([
   {
    path:"/",
    element:<Home/>
  },
  {
    path:"/productlist",
    element:<ProductList/>
  },  

{
  path: "/product",
  element: <Product />,
},
{
  path: "/register",
  element: <Register />,
},
{
  path: "/logins",
  element: <Logins />,
},
{
  path: "/login",
  element: <Login />,
},
{
  path: "/cart",
  element: <Cart />,
},
]);
return (
  <div>
    <RouterProvider router={router} />
  </div>
)
}


export default App;

