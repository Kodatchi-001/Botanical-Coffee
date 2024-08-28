import { Link } from "react-router-dom";
import Header from "../layout/Header/header";
export default function Section_1() {
    return <>
        <section className="w-full h-screen p-3" id="HomePage">
            <div className="w-full h-full rounded-3xl background-image-HomePage">
                <div className="w-full h-full rounded-3xl flex flex-wrap background-blur-black">
                    <div className="w-full h-[15%] flex justify-end lg:justify-center items-start lg:items-center p-3 lg:p-0">
                        <Header />
                    </div>
                    <div className="w-full h-1/2 flex justify-center items-center text-white">
                        <div className="w-full lg:w-4/6 2xl:w-1/2 h-[55%] sm:h-1/2 lg:h-auto xl:h-[85%] flex flex-col items-center justify-center gap-5 lg:gap-10 2xl:gap-11 Animation-tittle">
                            <h1 className="w-5/6 lg:w-full xl:w-[80%] text-center xl:text-start 2xl:text-center text-2xl lg:text-4xl">Enjoy the taste of</h1>
                            <h1 className="text-7xl sm:text-8xl lg:text-[7.5rem] lg:scale-150 mt-[-2vh] lg:mt-0 xl:mt-[-2vh]">botanical</h1>
                            <p className="w-5/6 sm:w-4/6 md:w-1/2 lg:w-5/6 xl:w-4/6 text-center text-stone-300">
                                Our coffee doesn’t have to taste that way. But it does.It’s
                                not your typical. It's unnecessarily good. Maybe that's because
                                we're unnecessarily driven.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[35%] flex lg:justify-between items-end lg:items-center xl:items-start relative">
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-6 lg:py-10 pb-28 lg:pb-0 flex justify-between gap-3">
                            <div className="w-[73%] h-full flex flex-col justify-center gap-2 px-5 py-10 text-white Border_White rounded-3xl overflow-hidden border-transparent-radius">
                                <h1 className="text-2xl">99+Beans</h1>
                                <p className="text-sm">
                                    “Too far” is exactly where we want to be. All in the name of coffee.
                                </p>
                            </div>
                            <div className="px-4 flex flex-col py-4 lg:py-0 justify-center items-center border-transparent-radius Border_White overflow-hidden">
                                <div className="p-7 z-30 mb-[-2vh] rounded-full Border_White" id="Cercle-HomePage-1">

                                </div>
                                <div className="p-7 z-20 mb-[-2vh] rounded-full Border_White" id="Cercle-HomePage-2">

                                </div>
                                <div className="p-7 z-10 rounded-full Border_White" id="Cercle-HomePage-3">

                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4 h-5/6 flex justify-end mt-auto lg:flex-wrap absolute lg:relative">
                            <div className="w-[30%] lg:w-full h-full lg:h-1/2 flex justify-center sm:justify-start lg:justify-end items-end lg:items-center px-5 z-10 py-5 lg:py-0">
                                <a href="#section-1" className="flex items-center text-4xl p-2 rounded-full Border_White cursor-pointer text-orange-500  hover:bg-white">
                                    <i class='bx bx-chevron-down'></i>
                                </a>
                            </div>
                            <div className="w-[70%] sm:w-auto h-1/3 lg:h-[36%] px-3 flex justify-center sm:justify-end items-center mt-auto ml-auto bg-[#f0efef] bg-rotate z-20">
                                <Link to="/shop" className="w-full lg:w-auto text-center sm:px-6 xl:px-11 py-3 rounded-full text-2xl lg:text-xl xl:text-2xl border-size font-bold text-black">
                                    Explore Goodies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}