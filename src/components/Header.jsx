import { Link } from "react-router";

const Header = () => {
    return ( 
        <div className="top-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
     );
}
 
export default Header;