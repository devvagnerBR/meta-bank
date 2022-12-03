import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Account from '../pages/private/account/account';
import Homepage from "../pages/public/homepage/homepage";
import Login from '../pages/public/login/login';
import Signup from '../pages/public/signup/signup';

export const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={< Signup />} />
                <Route path='/account' element={<Account />} />
            </Routes>
        </BrowserRouter>
    )
}

