import { Link } from "react-router-dom";
function Home(){
    return (
        <div>
            <h1>Home Componenet</h1>
            <p>This is a Home Page of our awesome App</p>
            <p>And here we are Learning about router</p>
            <Link to="/about">Go to About Page</Link>
        </div>
    )
}
export default Home;