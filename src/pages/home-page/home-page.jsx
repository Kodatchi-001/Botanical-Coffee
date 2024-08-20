import Header from "../../components/header";
import Section_1 from "./section-1";

export default function Home_Page() {
    return <>
        <section className="w-full h-screen p-3">
            <div className="w-full h-full rounded-3xl background-image">
                <div className="w-full h-full rounded-3xl flex flex-wrap background-blur-black">
                    <div className="w-full h-[15%] flex justify-end lg:justify-center items-center relative px-6 lg:px-0">
                        <Header />
                    </div>
                    <div className="w-full h-1/2 flex justify-center items-center text-white">
                        <div className="w-full lg:w-4/6 h-[55%] lg:h-[85%] flex items-center justify-center flex-wrap Animation-tittle">
                            <h1 className="w-5/6 lg:w-[82%] text-center lg:text-start text-2xl lg:text-4xl">Enjoy the taste of</h1>
                            <h1 className="text-6xl lg:text-[7.5rem] lg:scale-150 mt-[-2vh]">botanical</h1>
                            <p className="sm:w-5/6 lg:w-4/6 text-center text-stone-300">
                                Our coffee doesn’t have to taste that way. But it does.It’s
                                not your typical. It's unnecessarily good. Maybe that's because
                                we're unnecessarily driven.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[35%] flex lg:justify-between items-end lg:items-start relative">
                        <div className="w-full lg:w-1/4 h-full lg:h-5/6 px-6 lg:py-10 pb-28 lg:pb-0 flex justify-between">
                            <div className="w-[73%] h-full flex flex-col justify-center gap-2 px-5 text-white border-transparent-radius overflow-hidden">
                                <h1 className="text-2xl">99+Beans</h1>
                                <p className="text-sm">
                                    “Too far” is exactly where we want to be. All in the name of coffee.
                                </p>
                            </div>
                            <div className="w-[25%] h-full px-5 flex flex-col justify-center items-center border-transparent-radius overflow-hidden">
                                <div className="p-7 z-30 mb-[-2vh] rounded-full cursor-pointer" id="cercle-1">

                                </div>
                                <div className="p-7 z-20 mb-[-2vh] rounded-full cursor-pointer" id="cercle-2">

                                </div>
                                <div className="p-7 z-10 rounded-full cursor-pointer" id="cercle-3">

                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4 h-5/6 flex justify-end mt-auto lg:flex-wrap absolute lg:relative">
                            <div className="w-[30%] lg:w-full h-full lg:h-1/2 flex justify-center lg:justify-end items-end lg:items-center px-5 z-10 py-5 lg:py-0">
                                <a href="#" className="flex items-center text-4xl p-2 rounded-full border-transparent cursor-pointer text-orange-500">
                                    <i class='bx bx-chevron-down'></i>
                                </a>
                            </div>
                            <div className="w-[70%] sm:w-auto h-1/3 lg:h-[36%] sm:px-3 flex justify-center sm:justify-end items-end mt-auto ml-auto bg-white bg-rotate z-20 ">
                                <button className="px-5 lg:px-11 py-3 rounded-full text-2xl border-size text-black">
                                    Explore Goodies
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Section_1/>
    </>
}