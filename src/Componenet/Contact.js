import { Link, Outlet } from "react-router-dom";
function Contact() {

    return (
        <div>
            <h1>Contact Component</h1>
            <h2>Here we have some other business</h2>
            <Link to="company">Company</Link>
            <Link to="chenal">Chanel</Link>
            <Link to="other">Other</Link>
            <Outlet />
        </div>
    )
}

export default Contact;