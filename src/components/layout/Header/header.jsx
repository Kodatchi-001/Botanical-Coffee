import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar_v2 } from '../../../utils/navbar-v2';

export default function Header() {
    const [scrolled_navbar, setScrolled_navbar] = useState(false);
    const [valide, setvalide] = useState(false);
    const [colorLinks, setcolorLinks] = useState(false)

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY < 150 || scrollY > 4000) {
            setScrolled_navbar(false);
        } else if (scrollY >= 150 && scrollY <= 4000) {
            setScrolled_navbar(true);
        }

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
        <header className="w-[95%] h-4/6 px-5 lg:flex justify-between rounded-full Border_White border-white overflow-hidden hidden border-transparent-2">
            <div className="w-1/4 h-full lg:flex items-center gap-2 text-black">
                <Link to="/" className='px-8 py-2 rounded-full text-lg bg-white cursor-pointer Animation-header-left z-20'>Home</Link>
                <Link to="/Menu" className='px-8 py-2 rounded-full text-xl text-white hover:text-black hover:bg-white border-2 Border_White cursor-pointer Animation-header-left z-10'>Menu</Link>
            </div>
            <div className="w-1/4 h-full lg:flex justify-end items-center gap-2 text-black">
                <Link to="/Locations" className='px-8 py-2 rounded-full text-xl text-white hover:text-black hover:bg-white border-2 Border_White cursor-pointer Animation-header-right'>Locations</Link>
                <Link to="/Jobs" className='px-8 py-2 rounded-full text-xl text-white hover:text-black hover:bg-white border-2 Border_White cursor-pointer Animation-header-right'>Jobs</Link>
                <Link to="/Shop" className='px-2 py-1 rounded-full text-xl text-white hover:text-black hover:bg-white border-2 Border_White cursor-pointer Animation-header-right'>
                    <i class='bx bx-cart text-2xl text-orange-500 '></i>
                </Link>
            </div>
        </header>
        {/*Navbar-V2*/}
        <header className={`flex items-center flex-col rounded-3xl overflow-hidden gap-3 fixed text-white background-blur border-2 Border_White z-50 lg:hidden visible`}
            onClick={toggleNavbar}>
            <div className={`w-full flex flex-col gap-2 text-xl px-7 pt-5 ${valide ? 'visible' : 'hidden'}`}>
                <Link to="/" className={`${colorLinks == 'HomePage' ? 'text-orange-500' : 'text-white'}`}>Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Locations">Locations</Link>
                <Link to="/Jobs">Jobs</Link>
                <Link to="/Shop">Shop</Link>
            </div>
            <div className="w-5/6 h-full flex justify-center gap-5 px-6 py-5 cursor-pointer">
                <i class='bx bx-menu text-orange-500 text-3xl'></i>
                <h1 className="text-2xl flex items-center">botanical</h1>
            </div>
        </header>
        {/*Navbar-V3*/}
        <header className={`h-[8vh] bottom-2 ${scrolled_navbar ? 'animate' : 'mb-[-20vh]'} hidden lg:flex rounded-full border-transparent border-white fixed z-40 Border_White`}>
            <div className="w-full h-full flex justify-between items-center px-2 gap-3">
                <a href="#HomePage" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer Border_White z-20 hover:bg-white hover:text-black'>Home</a>
                <Link to="/Menu" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer Border_White z-20 hover:bg-white hover:text-black'>Menu</Link>
                <Link to="/Locations" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer Border_White z-20 hover:bg-white hover:text-black'>Locations</Link>
                <Link to="/Jobs" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer Border_White z-20 hover:bg-white hover:text-black'>Jobs</Link>
                <Link to="/Shop" className='px-2 py-1 rounded-full text-xl text-orange-500 bg-black cursor-pointer  hover:bg-white'>
                    <i class='bx bx-cart text-2xl'></i>
                </Link>
            </div>
        </header>
    </>
}