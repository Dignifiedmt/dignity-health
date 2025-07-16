import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App.jsx";
import BlogPage from "./components/BlogPage.jsx";
import ContactPage from "./components/ContactPage.jsx";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/shafuka" element={<BlogPage />} />
            <Route path="/tuntuɓe" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
