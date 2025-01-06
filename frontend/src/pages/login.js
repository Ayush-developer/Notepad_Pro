import React, {useStateh} from 'react'
import { login } from '../services/authService'


const LoginPage = () => {
    const [credentials,setCredentials] = setState({email:'',password:''})

    const handleSubmit = async(e) => {
          e.preventDefault()
          try{
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
        
          <input />
          <button type="submit"> Login </button>
        </form>
     );

}
 
export default LoginPage;