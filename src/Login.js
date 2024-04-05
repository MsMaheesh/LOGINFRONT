import React, {useState,useContext} from 'react'
import './css/login.css'
import axios from 'axios'
import { store } from './App'
import { Navigate } from 'react-router'



axios.defaults.baseURL="https://login-back-6ir4.onrender.com"
//https://login-back-6ir4.onrender.com
function Login() {
    const [token,setToken]=useContext(store)
    const [data,setData]=useState({
        email:'', password:''
    })
    
    const Onchange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    //console.log(data)

    const Loginhandler =async ()=>{
        
        //console.log("ms")
        const res= await axios.post('/login',data)
        //console.log('login',res)
        //window.alert(res.data)
        //console.log(res.data)
        //console.log(res.data.length,token)
        if(res.data.length > 20){
            setToken(res.data)
        }
        else{
            window.alert(res.data)
        }
        setData({
            email:'', password:'' 
        })
    }
    if(token){
        return <Navigate to='/Main'></Navigate>
    }
   
    
  return (
    <div className='l'>
        <center className='logincontainer'>
            
            <input className='input' placeholder='email' name='email' type='email' onChange={Onchange} value={data.email}></input>
            <input className='input' placeholder='password' name='password' type='password' onChange={Onchange} value={data.password}></input>
            
            <div>
                <button className='btn2' onClick={()=>Loginhandler()}>Login</button> 
            </div>
        </center> 
    </div>
  )
}

export default Login