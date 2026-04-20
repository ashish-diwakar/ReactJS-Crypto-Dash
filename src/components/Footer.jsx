import { Link } from "react-router";
const Footer = () => {
    return ( 
        <div className="bottom-nav">            
            <div class="row">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
             </div>
            <div class="row">
                CryptoDash by Ashish Diwakar Copyright © 2026 - All rights reserved || Designed By: Ashish Diwakar 
            </div>
        </div>
     );
}
 
export default Footer;