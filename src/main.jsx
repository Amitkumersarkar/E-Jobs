import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayOut from "./Layouts/MainLayOut"
import Home from "./Pages/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <h2>Pages not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
