  export const checkValidates=(email,password,name)=>{

     const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
     const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
     const isNameValid=/^^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name)

     if(!isEmailValid) return "Email id not Valid"
     if(!isPasswordValid) return "Pasword is not Valid"
     if(!isNameValid) return "name is not valid"

    return null;
  }