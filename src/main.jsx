import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import App from './App.jsx'
import About from './pages/About/About.jsx';

import './index.css'
import Error404 from './pages/Error404/Error404.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/Carousel',
            element: <Carousel />
          }
        ]
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/*',
        element: <Error404 />,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
