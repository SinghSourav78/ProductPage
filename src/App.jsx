import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductPage from "./Pages/ProductPage";

const router = createBrowserRouter([
  {
    path:"/",
    element: <ProductPage />
  }
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App;