import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const handleClick=()=>{

    signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate("/");
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  
  return (
    <div className="absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      {/* Netflix banner image */}
      <img
        alt="Netflix Banner"
        className="w-44 object-cover"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

     {user && <div className="flex">
        <img
          alt="u-icon"
          className=" w-10 p-1 m-3"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
        />
        <button className="font-bold text-white"
        onClick={handleClick}
        >(Signout)</button>
      </div>}
    </div>
  );
};

export default Header;
