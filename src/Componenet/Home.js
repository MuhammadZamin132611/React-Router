import { Link, useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
    // function navToPage (){
    //     let x = true;
    //     if(x){
    //         navigate('/about')
    //     }
    //     else{
    //         navigate('/filter')
    //     }
    // }
    function navToPage(url) {
        navigate(url)

    }

    
    return (
        <div>
            <h1>Home Componenet</h1>
            <p>This is a Home Page of our awesome App</p>
            <p>And here we are Learning about router</p>
            <Link to="/about">Go to About Page</Link><br />
            <button onClick={() => navToPage('/about')}>Go to About Page</button><br />
            {/* <button onClick={() => navToPage('/filter')}>Go to Filter Page</button> */}
            {/* <button onClick={()=> navigate('/about')}>Go to About Page</button><br /> */}
            {/* <button onClick={()=> navigate('/filter')}>Go to Filter Page</button> */}
        </div>
    )
}
export default Home;