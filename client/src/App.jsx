import './App.scss'
import Layout from './Layout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import VideoDetails from './pages/videoDetails/VideoDetails';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/:videoId',
          element: <VideoDetails />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
