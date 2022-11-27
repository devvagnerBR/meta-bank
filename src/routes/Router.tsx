import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "../pages/homepage/homepage";
import Login from '../pages/login/login';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

