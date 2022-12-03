import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Account from '../pages/private/account/account';
import History from '../pages/private/history/history';
import Transaction from '../pages/private/transaction/transaction';
import Homepage from "../pages/public/homepage/homepage";
import Login from '../pages/public/login/login';
import Signup from '../pages/public/signup/signup';
import Profile from './../pages/private/profile/profile';

export const Router = () => {


    return (
        <BrowserRouter>
            <Routes>

                //PUBLIC ROUTES
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={< Signup />} />

                /* PRIVATE ROUTES */
                <Route path='/account' element={<Account />} />
                <Route path='/transferir' element={<Transaction />} />
                <Route path='/extrato' element={<History />} />
                <Route path='/perfil' element={<Profile />} />

            </Routes>
        </BrowserRouter>
    )
}

