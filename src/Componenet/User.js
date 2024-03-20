import { Link, useParams, useLocation } from "react-router-dom";
function User(){
    const params = useParams();
    const {name} = params
    const location = useLocation();
    console.log(location)
    console.log(name)
    return (
        <div>
            <h1>This is {name} Page</h1>
            <Link to="/">Go to {name} Page</Link>
        </div>
    )
}
export default User;