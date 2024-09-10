import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <ToastContainer />
    </>
  )
}

export default MainLayout