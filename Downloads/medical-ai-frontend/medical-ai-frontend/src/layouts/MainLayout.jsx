
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
