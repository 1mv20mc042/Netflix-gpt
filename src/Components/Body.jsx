import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';
import Brower from './Browes';


const Body = () => {

    const AppRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>

        },
        {
            path:"/brower",
            element:<Brower/>
        }
    ])
  return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body
