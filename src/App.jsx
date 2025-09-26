import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './layout/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import JobPage from './pages/job'
import SavedJobs from './pages/saved-job'
import MyJobs from './pages/my-jobs'
import PostJob from './pages/post-job'


const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/onboarding',
        element:<Onboarding/>
      },
       {
        path:'/jobs',
        element:<JobListing/>
      },
       {
        path:'/job/:id',
        element:<JobPage/>
      },
       {
        path:'/post-job',
        element:<PostJob/>
      },
      {
        path:'/saved-job',
        element:<SavedJobs/>
      },
      {
        path:'/my-jobs',
        element:<MyJobs/>
      },

    ]
  }
])
function App() {


  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
