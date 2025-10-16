import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayOut from "./Layouts/MainLayOut"
import Home from "./Pages/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import AuthProvider from './Context/AuthProvider'
import Error from './Pages/ErrorPage/Error'
import JobDetails from './Pages/JobDetails'
import PrivateRoute from './Routes/PrivateRoute'
import JobApply from './Pages/JobApply'
import MyApplications from './Pages/MyApplication/MyApplications'
import AddJob from './Pages/AddJob/AddJob'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Terms from './Pages/Terms/Terms'
import Privacy from './Pages/PrivacyPolicy/Privacy'
import Cookie from './Pages/CookiePolicy/Cookie'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/sign-in',
        element: <SignIn></SignIn>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute> <JobApply></JobApply></PrivateRoute>
      },
      {
        path: '/myApplications',
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: '/add-job',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: '/about',
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: '/privacy',
        element: <Privacy></Privacy>
      },
      {
        path: '/cookie',
        element: <Cookie></Cookie>
      },

    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
