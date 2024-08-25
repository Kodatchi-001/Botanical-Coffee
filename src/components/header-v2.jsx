import { Link } from "react-router-dom";
import { useState } from 'react';
import { Navbar_v2 } from "../utils/navbar-v2";


export default function Header_v2() {
    const [valide, setvalide] = useState(false);
    const toggleNavbar = Navbar_v2(setvalide,valide)

    return <>
        {/*Navbar-V2*/}
        <header className="flex items-center flex-col rounded-3xl overflow-hidden gap-3 text-white border-transparent-radius Border_White z-50"
            onClick={toggleNavbar}>
            <div className={`w-full flex-col gap-2 text-xl px-7 pt-5 ${valide ? 'flex' : 'hidden'}`}>
                <Link to="/" className=''>Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Locations">Locations</Link>
                <Link to="/Jobs">Jobs</Link>
                <Link to="/Shop">Shop</Link>
            </div>
            <div className="w-5/6 h-full flex justify-center gap-5 px-6 py-5 button-blur-footer-link">
                <i class='bx bx-menu text-orange-500 text-3xl'></i>
                <h1 className="text-2xl flex items-center">botanical</h1>
            </div>
        </header>
    </>
}