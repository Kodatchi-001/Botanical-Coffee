import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar_v2 } from '../utils/navbar-v2';

export default function Header() {
    const [scrolled_navbar, setScrolled_navbar] = useState(false);
    const [valide, setvalide] = useState(false);
    const [colorLinks, setcolorLinks] = useState(false)

    const handleScroll = () => {
        const scrollY = window.scrollY;
        scrollY > 150 ? setScrolled_navbar(true) : setScrolled_navbar(false);
    };

    useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                setcolorLinks('HomePage');
                break;
            default:
                setcolorLinks('');
                break;
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const toggleNavbar = Navbar_v2(setvalide, valide);

    return <>
        {/*Navbar-V1*/}
        <header className="w-[95%] h-4/6 px-5 lg:flex justify-between rounded-full Border_White border-white overflow-hidden hidden">
            <div className="w-1/4 h-full lg:flex items-center gap-2 text-black">
                <Link to="/" className='px-8 py-2 rounded-full text-lg bg-white cursor-pointer Animation-header-left z-20'>Home</Link>
                <Link to="/Menu" className='px-8 py-2 rounded-full text-xl text-white border-2 Border_White cursor-pointer Animation-header-left z-10'>Menu</Link>
            </div>
            <div className="w-1/4 h-full lg:flex justify-end items-center gap-2 text-black">
                <Link to="/Locations" className='px-8 py-2 rounded-full text-xl text-white border-2 Border_White cursor-pointer Animation-header-right'>Locations</Link>
                <Link to="/Jobs" className='px-8 py-2 rounded-full text-xl text-white border-2 Border_White cursor-pointer Animation-header-right'>Jobs</Link>
                <Link to="/Shop" className='px-2 py-1 rounded-full text-xl text-white border-2 Border_White cursor-pointer Animation-header-right'>
                    <i class='bx bx-cart text-2xl text-orange-500'></i>
                </Link>
            </div>
        </header>
        {/*Navbar-V2*/}
        <header className="w-1/2 flex items-center flex-col rounded-3xl overflow-hidden fixed gap-3 text-white Border_White background-blur lg:hidden z-50"
            onClick={toggleNavbar}>
            <div className={`w-full flex-col gap-2 text-xl px-7 pt-5 ${valide ? 'flex' : 'hidden'}`}>
                <Link to="/" className={`${colorLinks == 'HomePage' ? 'text-orange-500' : 'text-{Color}'}`}>Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Locations">Locations</Link>
                <Link to="/Jobs">Jobs</Link>
                <Link to="/Shop">Shop</Link>
            </div>
            <div className="w-5/6 h-full flex gap-5 px-2 py-5 button-blur-footer-link">
                <i class='bx bx-menu text-orange-500 text-3xl'></i>
                <h1 className="text-2xl flex items-center">botanical</h1>
            </div>
        </header>
        {/*Navbar-V3*/}
        <header className={`w-[40%] h-[8vh] bottom-2 ${scrolled_navbar ? 'animate' : 'mb-[-20vh]'} hidden lg:flex rounded-full border-transparent border-white fixed z-40 Border_White`}>
            <div className="w-full h-full flex justify-between items-center px-2">
                <Link to="/" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer Border_White z-20'>Home</Link>
                <Link to="/Menu" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer Border_White z-20'>Menu</Link>
                <Link to="/Locations" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer Border_White z-20'>Locations</Link>
                <Link to="/Jobs" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer Border_White z-20'>Jobs</Link>
                <Link to="/Shop" className='px-2 py-1 rounded-full text-xl text-orange-500 bg-black cursor-pointer'>
                    <i class='bx bx-cart text-2xl text-orange-500'></i>
                </Link>
            </div>
        </header>
    </>
}