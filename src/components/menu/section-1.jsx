import { useEffect } from "react";
import Footer_v2 from "../layout/Footer/footer-v2";
import Header_v2 from "../layout/Header/header-v2";

export default function Menu_section_1() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <>
        <section className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 h-[40vh] lg:h-full lg:fixed px-2 py-3 z-50">
                <div className="w-full h-full flex flex-col justify-between items-end rounded-3xl pb-9 p-4 pl-8 background-image-menu">
                    <div className="w-1/2 fixed lg:flex justify-end">
                        <Header_v2 Color={"white"} border={"Border_White"} />
                    </div>
                    <h1 className="w-full text-5xl lg:text-7xl text-white mt-auto">Menu</h1>
                </div>
            </div>
            <div className="w-1/2 h-full hidden lg:flex">

            </div>
            <div className="w-full lg:w-1/2 h-full px-2 py-3">
                <div className="w-full h-full flex justify-center lg:justify-start flex-wrap rounded-3xl lg:pl-6 xl:pl-28 lg:pr-8 gap-8 lg:gap-0">
                    <div className="w-full xl:w-[90%] h-[40vh] lg:flex flex-col justify-center gap-7 hidden">
                        <h1 className="text-center lg:text-start text-3xl">
                            It’s not your typical. It's unnecessarily good
                        </h1>
                        <h1 className="text-center lg:text-start text-3xl">
                            Maybe that's because we're unnecessarily driven.
                        </h1>
                    </div>
                    <div className="w-5/6 lg:w-full xl:w-5/6 lg:h-screen flex lg:flex-col justify-center flex-wrap lg:gap-10 py-8 lg:py-0 gap-8 lg:border-t border-gray-500">
                        <h1 className="w-full text-5xl lg:text-6xl ">Coffee Drinks</h1>
                        <div className="w-full h-5/6 lg:h-1/2 flex justify-center lg:justify-start lg:ml-8">
                            <table className="w-[95%] h-full flex flex-col justify-between gap-2">
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Espresso</td>
                                    <td className="text-xl">$3</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Americano</td>
                                    <td className="text-xl">$3.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Macchiato</td>
                                    <td className="text-xl">$3.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Cortado</td>
                                    <td className="text-xl">$4</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Cappuccino</td>
                                    <td className="text-xl">$4.2</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Latte</td>
                                    <td className="text-xl">$4.8</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Mocha</td>
                                    <td className="text-xl">$4.8</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">V60</td>
                                    <td className="text-xl">$5.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Cold Brew</td>
                                    <td className="text-xl">$3.8</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Batch Brew</td>
                                    <td className="text-xl">$3.8</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Espresso Tonic</td>
                                    <td className="text-xl">$4.8</td>
                                </tr>
                            </table>

                        </div>
                    </div>
                    <div className="w-5/6 lg:w-full xl:w-5/6 lg:h-[70vh] flex flex-col lg:justify-center gap-10 lg:border-t lg:border-gray-500">
                        <h1 className="w-full text-6xl">Bakery</h1>
                        <div className="w-full h-1/3 lg:ml-8">
                            <table className="w-[95%] h-full flex flex-col justify-between gap-2">
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Cupcake</td>
                                    <td className="text-xl">$5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Donut</td>
                                    <td className="text-xl">$5.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Croissant</td>
                                    <td className="text-xl">$5.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Danish</td>
                                    <td className="text-xl">$6.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg font-bold">Brownies</td>
                                    <td className="text-xl">$4.5</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer_v2 />
            </div>
        </section>
    </>
}