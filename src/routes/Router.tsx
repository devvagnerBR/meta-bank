import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header/header';
import Homepage from "../pages/homepage/homepage";
import Login from '../pages/login/login';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

