import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <>
        <nav>
            <Link to="/register">Rejestracja</Link> | 
            <Link to="/login">Logowanie</Link> | 
            <Link to="/users">Lista użytkowników</Link>
        </nav>
    </>
    );
}

export default Navbar