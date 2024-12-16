import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList.tsx'
import Home from './components/Home.tsx'
import Navbar from './components/Navbar.tsx'

function App() {
    return (
    <BrowserRouter>

      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<UserList/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

