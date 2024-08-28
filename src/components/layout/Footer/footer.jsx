import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // window.location.pathname will return "/shop/products".
        switch (window.location.pathname) {
            case '/':
                setActiveSection('HomePage');
                break;
            case '/Shop':
                setActiveSection('Shop');
                break;
            default:
                setActiveSection('');
                break;
        }
    }, []);

    return <>
        <footer className="w-full h-screen p-3 pt-8 flex">
            <div className="w-full h-full rounded-3xl flex flex-wrap pt-10 px-8 background-image-HomePage">
                <div className="w-full h-1/2 flex flex-col justify-evenly items-center text-white">
                    <h1 className="text-5xl lg:text-7xl text-center lg:text-start">Join the community!</h1>
                    <div className="flex justify-around flex-wrap gap-5">
                        <input type="email" className="w-full lg:w-auto pl-7 pr-24 py-3 rounded-full text-black" placeholder="Your-email@gmail.com" />
                        <button className="w-full lg:w-auto lg:px-9 text-lg rounded-full bg-orange-500 hover:border border-orange-500 hover:bg-transparent">Sign Up</button>
                    </div>
                    <p className="w-full text-center">No spam. Just weekly news from the Botanic world.</p>
                </div>
                <div className="w-full h-[35%] rounded-3xl flex justify-center flex-wrap mt-auto button-blur-footer mb-14">
                    <div className="w-full h-[60%] flex justify-center items-center gap-4 text-2xl text-white">
                        <i class='bx bxl-instagram button-blur-icone-footer Border_White p-4 rounded-full'></i>
                        <i class='bx bxl-pinterest-alt button-blur-icone-footer Border_White p-4 rounded-full' ></i>
                        <i class='bx bxl-twitter button-blur-icone-footer Border_White p-4 rounded-full' ></i>
                        <i class='bx bx-envelope button-blur-icone-footer Border_White p-4 rounded-full' ></i>
                    </div>
                    <div className="w-[95%] h-[40%] flex justify-center items-center button-blur-footer-link">
                        <div className="w-[40%] h-3/6 lg:flex justify-around items-center text-white hidden">
                            <ul className="w-full h-full flex justify-end gap-5 items-center text-lg lg:pr-8 flex-wrap">
                                <h2>Privacy Policy</h2>
                                <h2>Imprint</h2>
                                <h2>404</h2>
                            </ul>
                        </div>
                        <div className="w-5/6 h-5/6 lg:w-[40%] lg:h-3/6 flex justify-around items-center lg:button-blur-footer-left text-white">
                            <ul className="w-full h-full flex lg:justify-around items-center lg:text-lg lg:px-3 flex-wrap">
                                <Link to="/" className={`w-1/3 lg:w-auto text-center lg:text-start ${activeSection === 'HomePage' ? 'text-orange-500' : 'text-white'}`}>HomePage</Link>
                                <Link to="/Menu" className="w-1/3 lg:w-auto text-center lg:text-start">Menu</Link>
                                <Link to="/Locations" className="w-1/3 lg:w-auto text-center lg:text-start">Locations</Link>
                                <Link to="/Jobs" className="w-1/3 lg:w-auto text-center lg:text-start">Jobs</Link>
                                <Link to="/Shop" className={`w-1/3 lg:w-auto text-center lg:text-start ${activeSection === 'Shop' ? 'text-orange-500' : 'text-white'}`}>Shop</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </>
}