import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

// páginas
import Home from './routes/Home.jsx'
import Movie from './routes/Movie.jsx'
import Search from './routes/Search.jsx'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const route = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        element: <Home />,
        path: '/'
      },
      {
        element: <Movie />,
        path: '/movie/:id'
      },
      {
        element: <Search />,
        path: '/search'
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
