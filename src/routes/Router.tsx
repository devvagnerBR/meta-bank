import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header/header';
import Homepage from "../pages/homepage/homepage";
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';

export const Router = () => {


    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={< Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

