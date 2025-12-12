import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import SignUp from './Pages/SignUp'
import SignUpComponent from './Components/SignUpComponent'
import JoinAsOrganization from './Pages/JoinAsOrganization'
import JoinAsVolunteer from './Pages/JoinAsVolunteer'
import VerifyEmail from './Pages/VerifyEmail'

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
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/contact",
      element: <ContactUs />
    },
    {
      path:"/register_club",
      element:<JoinAsOrganization/>
    },
    {
      path:"/register_volunteer",
      element:<JoinAsVolunteer/>
    },
    {
      path:"/verify/:uid/:token",
      element:<VerifyEmail />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
