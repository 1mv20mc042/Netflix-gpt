import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidates } from "../utils/Validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error,setError]=useState(null)

  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null)
  const navigate=useNavigate()

  const ToggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClick = () => {
    const data=checkValidates(email.current.value, password.current.value)
    setError(data)

    if (data) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: "name.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      navigate('/')
      // ...
    }).catch((error) => {
      setError(erorrCode)
      // An error occurred
      // ...
    });
    
    console.log(user)  
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+''+errorMessage)
    // ..
  });
}else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate('/brower')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+''+errorMessage)
  });

    }

    
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "signin" : "signUp"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className=" p-4 my-4 w-full bg-gray-700"
        />
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold py-2">{error}</p>
        <button className="p-4 my-6 bg-red-600 w-full" onClick={handleClick}>
          {isSignIn ? "signin" : "signUp"}
        </button>
        <p className="p-2 m-2  cursor-pointer" onClick={ToggleForm}>
          {isSignIn
            ? "New to Netflix ? Sign in Now"
            : "Already registred?SignUp now"}
        </p>
      </form>
    </div>
  );
};

export default Login;