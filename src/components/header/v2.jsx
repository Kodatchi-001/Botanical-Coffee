import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Navbar } from "../../utils/navbar-v2";


export default function Header_v2({ Color, border }) {
    const [valide, setvalide] = useState(false);
    const toggleNavbar = Navbar(setvalide, valide);
    const [colorLinks, setcolorLinks] = useState(false)

    useEffect(() => {
        switch (window.location.pathname) {
            case '/Menu':
                setcolorLinks('Menu');
                break;
            case '/Locations':
                setcolorLinks('Locations');
                break;
            case '/Jobs':
                setcolorLinks('Jobs');
                break;
            case '/Shop':
                setcolorLinks('Shop');
                break;
            case '/Products':
                setcolorLinks('Shop');
                break;
            default:
                setcolorLinks('');
                break;
        }
    }, []);
    
    return <>
        {/*Navbar-V2*/}
        <header className={`flex items-center flex-col rounded-3xl overflow-hidden gap-3 text-${Color} background-blur border-2 ${border} z-50`}
            onClick={toggleNavbar}>
            <div className={`w-full flex flex-col gap-2 text-xl px-7 pt-5 ${valide ? 'visible' : 'hidden'}`}>
                <Link to="/">Home</Link>
                <Link to="/Menu" className={`${colorLinks == 'Menu' ? 'text-orange-500' : 'text-{Color}'}`}>Menu</Link>
                <Link to="/Locations" className={`${colorLinks == 'Locations' ? 'text-orange-500' : 'text-{Color}'}`}>Locations</Link>
                <Link to="/Jobs" className={`${colorLinks == 'Jobs' ? 'text-orange-500' : 'text-{Color}'}`}>Jobs</Link>
                <Link to="/Shop" className={`${colorLinks == 'Shop' ? 'text-orange-500' : 'text-{Color}'}`}>Shop</Link>
            </div>
            <div className="w-5/6 h-full flex justify-center gap-5 px-3 py-5 cursor-pointer">
                <i class='bx bx-menu text-orange-500 text-3xl'></i>
                <h1 className="text-2xl flex items-center">botanical</h1>
            </div>
        </header>
    </>
}