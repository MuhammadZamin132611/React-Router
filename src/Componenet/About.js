import { Link } from "react-router-dom";
function About(){
    return (
        <div>
            <h1>About Componenet</h1>
            <p>This is a About Page of our awesome App</p>
            <p>And here we are Learning about router</p>
            <Link to="/">Go to Home Page</Link>
            <li><Link to="/user/zamin" state={{name: 'zamin', age:27}} >Zamin</Link></li>
            <li><Link to="/user/peter" >Peter</Link></li>
        </div>
    )
}
export default About;