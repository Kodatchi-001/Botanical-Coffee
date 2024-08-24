import Footer_v2 from "../footer-v2";
import Header_v2 from "../header-v2";
export default function Menu_section_1() {
    return <>
        <section className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 h-[40vh] lg:h-full lg:fixed px-2 py-3">
                <div className="w-full h-full flex flex-col justify-between rounded-3xl p-3 pb-9 pl-8 background-image-menu">
                    <div className="flex justify-end">
                        <Header_v2 />
                    </div>
                    <h1 className="text-5xl lg:text-7xl text-white mt-auto">Menu</h1>
                </div>
            </div>
            <div className="w-1/2 h-full hidden lg:flex">

            </div>
            <div className="w-full lg:w-1/2 h-full px-2 py-3">
                <div className="w-full h-full flex justify-center lg:justify-start flex-wrap rounded-3xl lg:pl-28 lg:pr-8 gap-8 lg:gap-0">
                    <div className="w-full h-[40vh] lg:flex flex-col justify-center gap-7 hidden">
                        <h1 className="text-center lg:text-start text-3xl">
                            It’s not your typical. It's unnecessarily good
                        </h1>
                        <h1 className="text-center lg:text-start text-3xl">
                            Maybe that's because we're unnecessarily driven.
                        </h1>
                    </div>
                    <div className="w-5/6 lg:h-screen flex lg:flex-col justify-center flex-wrap lg:gap-10 py-8 lg:py-0 gap-8 lg:border-t border-gray-500">
                        <h1 className="w-full text-5xl lg:text-6xl ">Coffee Drinks</h1>
                        <div className="w-full h-5/6 lg:h-1/2 flex justify-center lg:justify-start lg:ml-8">
                            <table className="w-[95%] h-full flex flex-col justify-between gap-2">
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Espresso</td>
                                    <td className="text-xl">$3</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Americano</td>
                                    <td className="text-xl">$3.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Macchiato</td>
                                    <td className="text-xl">$3.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Cortado</td>
                                    <td className="text-xl">$4</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Cappuccino</td>
                                    <td className="text-xl">$4.2</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Latte</td>
                                    <td className="text-xl">$4.8</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Mocha</td>
                                    <td className="text-xl">$4.8</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">V60</td>
                                    <td className="text-xl">$5.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Cold Brew</td>
                                    <td className="text-xl">$3.8</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Batch Brew</td>
                                    <td className="text-xl">$3.8</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Espresso Tonic</td>
                                    <td className="text-xl">$4.8</td>
                                </tr>
                            </table>

                        </div>
                    </div>
                    <div className="w-5/6 lg:h-[70vh] flex flex-col lg:justify-center gap-10 lg:border-t lg:border-gray-500">
                        <h1 className="w-full text-6xl">Bakery</h1>
                        <div className="w-full h-1/3 lg:ml-8">
                            <table className="w-[95%] h-full flex flex-col justify-between gap-2">
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Cupcake</td>
                                    <td className="text-xl">$5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Donut</td>
                                    <td className="text-xl">$5.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Croissant</td>
                                    <td className="text-xl">$5.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Danish</td>
                                    <td className="text-xl">$6.5</td>
                                </tr>
                                <tr className="w-full flex justify-between">
                                    <td className="text-lg">Brownies</td>
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