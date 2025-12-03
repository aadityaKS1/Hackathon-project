import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Events from './Pages/Events'
import ContactUs from './Pages/ContactUs'
import SignUp from './Pages/SignUp'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <AboutUs />
    },
    {
      path: "/events",
      element: <Events />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/contact",
      element: <ContactUs />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
