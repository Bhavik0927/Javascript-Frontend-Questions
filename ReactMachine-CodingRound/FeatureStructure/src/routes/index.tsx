import { Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import ProductPage from "../features/products/pages/ProductPage";

export const AppRoutes = () =>{
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<ProductPage />} />
    </Routes>
}