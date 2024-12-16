import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <>
        <nav className="navbar">
            <div className="navbar_field">
                <Link to="/" className="navbar_text">Home</Link>
            </div>
            
            <div className="navbar_field">
                <Link to="/login" className="navbar_text">Login</Link> 
                <Link to="/register" className="navbar_text">Register</Link> 
            </div>
        </nav>
    </>
    );
}

export default Navbar