import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
    const login = ()=>{
        localStorage.setItem('login', true)
        navigate('/')
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login){
            navigate('/')
        }
    })
    return (
        <div>
            <h1>Login Component</h1>
            <input type="text" name="" id="" /><br />
            <input type="text" name="" id="" /><br />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;