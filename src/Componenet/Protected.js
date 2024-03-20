import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props) {
    const {Componenet} = props
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    })
    return (
        <div>
            <Componenet />
        </div>
    )
}

export default Protected;