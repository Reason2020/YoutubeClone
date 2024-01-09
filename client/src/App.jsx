import './App.scss'
import Layout from './Layout';
import Home from './pages/home/Home';
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
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
