import { useEffect } from "react";
import Footer from "../footer/v2";
import Header from "../header/v2";

export default function Location() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>
        <section className="w-full lg:h-screen flex flex-wrap">
            <div className="w-full lg:w-1/3 h-full flex flex-col gap-5 lg:fixed p-3">
                <div className="w-full h-[38vh] lg:h-[57%] background-image-HomePage rounded-3xl z-50">
                    <div className="w-full h-full flex flex-col justify-between items-end rounded-3xl pb-9 p-4 pl-8">
                        <div className="w-1/2 fixed lg:flex justify-end">
                            <Header Color={"white"} border={"Border_White"} />
                        </div>
                        <h1 className="w-full text-5xl lg:text-7xl text-white mt-auto">Menu</h1>
                    </div>
                </div>
                <div className="w-full h-1/4 lg:flex flex-col justify-center gap-3 text-3xl hidden">
                    <div className="w-full flex items-center gap-3">
                        <div className="w-[5%] h-[1%] bg-orange-500"></div>
                        <h1>Pargue</h1>
                    </div>
                    <div className="w-full flex items-center gap-3">
                        <div className="w-[5%] h-[1%] bg-orange-500"></div>
                        <h1>Berlin</h1>
                    </div>
                    <div className="w-full flex items-center gap-3">
                        <div className="w-[5%] h-[1%] bg-orange-500"></div>
                        <h1>Vienna</h1>
                    </div>
                </div>
            </div>
            <div className="w-1/3 h-full hidden lg:flex">

            </div>
            <div className="w-full lg:w-2/3 lg:h-screen flex flex-wrap gap-5 lg:gap-4 pt-3 pr-3 px-3 lg:px-0">
                <div className="w-full lg:h-[80vh] rounded-[1.8rem]" id="locations-1">
                    <div className="w-full h-full flex items-end rounded-[1.8rem] p-6 pt-36 lg:pt-0 background-dark-img">
                        <div className="w-full h-full lg:h-[40%] flex flex-col justify-between gap-3 text-white">
                            <div className="w-full h-1/2 flex flex-col gap-3">
                                <h1 className="text-4xl">Prague</h1>
                                <p className="w-4/6 lg:w-[30%]">
                                    Suite 542 53750 Berry Mountain Prague 1,  ND 50824
                                </p>
                            </div>
                            <div className="w-full h-[35%] flex items-center gap-4 py-2 button-blur-footer-link">
                                <i class='bx bx-phone-call px-2 py-1 text-lg rounded-full button-blur-icone'></i>
                                <a href="" className="py-1 px-1 pr-6 text-lg flex items-center justify-between gap-4 rounded-full button-blur">
                                    <i class='bx bxs-map rounded-full p-2 button-blur' ></i>
                                    Navigate
                                </a>
                                <div className="w-4/5 h-[65%] flex flex-wrap text-sm">
                                    <h1 className="w-full">Monday to Sunday</h1>
                                    <h1>09 AM — 07 PM</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:h-[80vh] rounded-[1.8rem]" id="locations-2">
                    <div className="w-full h-full flex items-end rounded-[1.8rem] p-6 pt-36 lg:pt-0 background-dark-img">
                        <div className="w-full h-full lg:h-[40%] flex flex-col justify-between gap-3 text-white">
                            <div className="w-full h-1/2 flex flex-col gap-3">
                                <h1 className="text-4xl">Berlin</h1>
                                <p className=" w-1/2 lg:w-[19%]">
                                    3361 Sharyl Plaza Berlin, MD 34078
                                </p>
                            </div>
                            <div className="w-full h-[35%] flex items-center gap-4 py-2 button-blur-footer-link">
                                <i class='bx bx-phone-call px-2 py-1 text-lg rounded-full button-blur-icone'></i>
                                <a href="" className="py-1 px-1 pr-6 text-lg flex items-center justify-between gap-4 rounded-full button-blur">
                                    <i class='bx bxs-map rounded-full p-2 button-blur' ></i>
                                    Navigate
                                </a>
                                <div className="w-4/5 h-[65%] flex flex-wrap text-sm">
                                    <h1 className="w-full">Monday to Sunday</h1>
                                    <h1>10 AM — 09 PM</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:h-[80vh] rounded-[1.8rem]" id="locations-3">
                    <div className="w-full h-full flex items-end rounded-[1.8rem] p-6 pt-36 lg:pt-0 background-dark-img">
                        <div className="w-full h-full lg:h-[40%] flex flex-col justify-between gap-3 text-white">
                            <div className="w-full h-1/2 flex flex-col gap-3">
                                <h1 className="text-4xl">Vienna</h1>
                                <p className="w-4/5 lg:w-[30%]">
                                    Suite 542 53750 Berry Mountain Vienna, LA 89493-0248
                                </p>
                            </div>
                            <div className="w-full h-[35%] flex items-center gap-4 py-2 button-blur-footer-link">
                                <i class='bx bx-phone-call px-2 py-1 text-lg rounded-full button-blur-icone'></i>
                                <a href="" className="py-1 px-1 pr-6 text-lg flex items-center justify-between gap-4 rounded-full button-blur">
                                    <i class='bx bxs-map rounded-full p-2 button-blur' ></i>
                                    Navigate
                                </a>
                                <div className="w-4/5 h-[65%] flex flex-wrap text-sm">
                                    <h1 className="w-full">Monday to Sunday</h1>
                                    <h1>08 AM — 06 PM</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    </>
}