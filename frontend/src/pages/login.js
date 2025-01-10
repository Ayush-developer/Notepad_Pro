import React, {useState} from 'react'
import { login } from '../services/authService'
import { useNavigate } from 'react-router-dom'
import Dashboard from './dashboard'


const LoginPage = () => {
    const [credentials,setCredentials] = useState({email:'',password:''})
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
          e.preventDefault()
          try{
            console.log('Login HUa')
            await login(credentials)
          }
          catch(err) {
            alert('Login Failed')
          }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <h1> Email</h1>
           <input
           type="email"
           placeholder="Email"
           value = {credentials.email}
           onChange={(e)=> setCredentials({...credentials,email:e.target.value})}
           
           />

<h1> Password</h1>
           <input
           type="password"
           placeholder="Password"
           value = {credentials.pasword}
           onChange={(e)=> setCredentials({...credentials,password:e.target.value})}
           
           />
        
     
          <button type="submit"> Login </button>
        </form>
     );

}
 
export default LoginPage;