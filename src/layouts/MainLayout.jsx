import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Navbar";
const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainLayout