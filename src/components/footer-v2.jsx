import { Link } from "react-router-dom";

export default function Footer_v2() {
    return <>
        <footer className="w-full h-[85vh] flex flex-col justify-between items-end mt-10">
            <div className="w-full h-[60%] rounded-3xl p-6" id="menu-1">
                <div className="w-full h-full rounded-3xl flex justify-center flex-wrap button-blur-footer ">
                    <div className="w-full h-[60%] flex flex-col justify-center items-center gap-6 text-white">
                        <h1 className="text-3xl lg:text-4xl">Join the community!</h1>
                        <div className="w-4/5 lg:w-full flex justify-center flex-wrap gap-5">
                            <input type="email" className="w-full lg:w-auto pl-10 lg:px-8 py-3 rounded-full text-black" placeholder="Your-email@gmail.com" />
                            <button className="w-full lg:w-auto lg:px-8 py-3 lg:py-2 text-lg rounded-full bg-orange-500">Sign Up</button>
                        </div>
                    </div>
                    <div className="w-[85%] h-[35%] flex justify-center flex-wrap mt-auto button-blur-footer-link">
                        <div className="w-full h-full flex justify-center items-center gap-4 text-2xl text-white">
                            <i class='bx bxl-instagram button-blur-icone-footer p-4 rounded-full'></i>
                            <i class='bx bxl-pinterest-alt button-blur-icone-footer p-4 rounded-full' ></i>
                            <i class='bx bxl-twitter button-blur-icone-footer p-4 rounded-full' ></i>
                            <i class='bx bx-envelope button-blur-icone-footer p-4 rounded-full' ></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[38%] rounded-3xl p-6" id="menu-1">
                <div className="w-full h-full flex justify-center flex-wrap">
                    <div className="w-full h-1/2 flex justify-center">
                        <div className="w-full lg:w-5/6 h-full flex justify-center items-center lg:text-lg lg:px-3 flex-wrap lg:gap-8 text-white">
                            <Link to="/" className="w-1/3 lg:w-auto text-center text-xl lg:text-[1rem] lg:text-start">HomePage</Link>
                            <Link to="/Menu" className="w-1/3 lg:w-auto text-center text-xl lg:text-[1rem] lg:text-start">Menu</Link>
                            <Link to="/Locations" className="w-1/3 lg:w-auto text-center text-xl lg:text-[1rem] lg:text-start">Locations</Link>
                            <Link to="/Jobs" className="w-1/3 lg:w-auto text-center text-xl lg:text-[1rem] lg:text-start">Jobs</Link>
                            <Link to="/Shop" className="w-1/3 lg:w-auto text-center text-xl lg:text-[1rem] lg:text-start">Shop</Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/6 h-1/2 flex justify-center button-blur-footer-link">
                        <ul className="w-full lg:w-5/6 h-full flex justify-center items-center lg:text-lg lg:px-3 flex-wrap lg:gap-8 text-white">
                            <li className="w-1/3 lg:w-auto text-center text-xl lg:text-[1rem] lg:text-start"><a href="">Privacy Policy</a></li>
                            <li className="w-1/3 lg:w-auto text-center text-xl lg:text-[1rem] lg:text-start"><a href="">Imprint</a></li>
                            <li className="w-1/3 lg:w-auto text-center text-xl lg:text-[1rem] lg:text-start"><a href="">404</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
}