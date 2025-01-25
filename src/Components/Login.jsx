import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div>
      <Header />
      {/* Netflix logo */}
      <div className="absolute">
        <img
          
          alt="Netflix Logo"
         src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">Signin</h1>
        <input type="text" placeholder='Email address'className=" p-4 my-4 w-full bg-gray-700"/>
        <input type="text" placeholder='Password' className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-6 bg-red-600 w-full">Sign In</button>
        <p className="p-2 m-2">New to Netflix ? Sign of Now</p>
      </form>
    </div>
  );
};

export default Login;