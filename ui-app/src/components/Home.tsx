import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/users");
    }, []);

    return(
        <>
            <h1>Home page</h1>
        </>
    );
}

export default Home;