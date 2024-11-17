import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;