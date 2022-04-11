import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Login.css";
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const navigate =useNavigate()
    const [
        signInWithEmailAndPassword,user ]  =useSignInWithEmailAndPassword(auth);
    console.log(user)
    if(user){
        navigate("/shop")
    }
        const handlePassword =(e)=>{
        setPassword(e.target.value)
      }
      const handleEmail =(e)=>{
        setEmail(e.target.value)
      }
      const handle =event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
          
      }
    
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
               <input type="submit" value="LogIn" />
               </div>
            </form>
            <div className="">
            <p>New To Amazon <Link to="/signup">Create An Aecount</Link></p>
            </div>
        </div>

    );
};

export default Login;