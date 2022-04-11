import React,{useState} from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate} from 'react-router-dom';
import "./SignUp.css"
import app from '../../firebase.init';
import auth from '../../firebase.init';




const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confarmPassword, setConfarmPassword] = useState("")
    const [error, setError] = useState("")
    const nagivate =useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth);
      if(user){
nagivate("/shop")
      }

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handle =event=>{
        event.preventDefault()
              if(password !==confarmPassword){
        setError("Dosent matching")
          return;
          
      }
      
        createUserWithEmailAndPassword(email, password)
    }
    const handleconPass =(e)=>{
        setConfarmPassword(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    // const handle=(event)=>{
    //   event.preventDefult()
    // //   if(password !==confarmPassword){
    // //     setError("Dosent matching")
    // //       return;
          
    // //   }
    // }
    console.log(email,password,confarmPassword)
    return (
        <div className='form-container'>
            <form onSubmit={handle}>
               <div className="">
               <h2>LogIn</h2>
               <div className="input-group">
                   <label for="email">email</label>
                   <input onBlur={handleEmail} type="email" name="" id="" />
               </div>
               <div className="input-group">
                   <label for="password">Password</label>
                  <input onBlur={handlePassword} type="password" name="" id="" />
               </div>
               <div className="input-group">
                   <label for="password">Confarm Password</label>
                  <input onBlur={handleconPass} type="password" name="" id="" />
               </div>
               <input  type="submit" value="LogIn" />
               <p>{error}</p>
               </div>
            </form>
            <div className="">
            <p>Already SignUp <Link to="/login">Login</Link></p>
            
            </div>
        </div>
    );
};

export default SignUp;