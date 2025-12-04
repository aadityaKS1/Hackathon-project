import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import SignUp from './Pages/SignUp'
import Events from './Pages/Events'
import SignUpComponent from './Components/SignUpComponent'
import JoinAsOrganization from './Pages/JoinAsOrganization'
import JoinAsVolunteer from './Pages/JoinAsVolunteer'

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
    },
    {
      path: "/register_club",
      element: <JoinAsOrganization />
    },
    {
      path: "/register_volunteer",
      element: <JoinAsVolunteer />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
