const API_URL = 'http://localhost:5000/api'

export const login = async(credentials)=>{
      const response = await fetch(`${API_URL}/auth/login`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(credentials),
        credentials: 'include'
      });
      console.log(response.json());
      if(!response.ok){
        throw new Error('LoginFailed')
      }
      return response.json()
}

export const signup = async (data) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    console.log(response.json());
    if (!response.ok) {
        throw new Error('Signup failed');
    }
    return await response.json();
};

export const logout= async(credentials) => {
  await fetch(`${API_URL}/api/auth`,{
        credentials: 'include'
    })
}
