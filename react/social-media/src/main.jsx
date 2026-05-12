import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostList from './components/PostsList.jsx'
import CreatePost from './components/CreatePost.jsx'

const router = createBrowserRouter(
  [
    {path:"/",
      element: <App/>,
    children:[
      {path:"/", element:<PostList/>},
      {path:"/create-post",element:<CreatePost/>}
    ]}
  ]
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
