import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Brower from "./Browes";
import {auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {
  const dispatch=useDispatch()
  
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/brower",
      element: <Brower />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
        
      } else {
       dispatch(removeUser())
       
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
