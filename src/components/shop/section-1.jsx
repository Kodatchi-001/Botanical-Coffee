import Footer from "../footer";
import Header_v2 from "../header-v2";

export default function Shop_section_1() {
    return <>
        <section className="w-full h-full flex flex-wrap mb-14">
            <div className="w-full h-[15vh] lg:h-[10vh] flex justify-end p-5">
                <div className="fixed">
                    <Header_v2 />
                </div>
            </div>
            <div className="w-full h-full flex flex-wrap gap-8 lg:px-40">
                <div className="w-full lg:h-[50vh] flex flex-col items-center justify-center gap-8">
                    <h1 className="w-4/5 lg:w-1/2 text-5xl text-center lg:text-[5.2rem] font-bold">Unnecessarily Good Good(s)</h1>
                    <p className="w-5/6 lg:w-1/3 text-center">
                        It’s not your typical. It's unnecessarily good.
                        Maybe that's because we're unnecessarily driven.
                    </p>
                </div>
                <div className="w-full h-full flex flex-wrap gap-5">
                    <div className="w-full h-[12vh] flex justify-center lg:justify-start items-center flex-wrap gap-2 text-xl">
                        <button className="px-8 py-[0.6rem] rounded-full bg-black text-white">View All</button>
                        <button className="px-8 py-[0.6rem] rounded-full border-2 border-black">Coffee</button>
                        <button className="px-8 py-[0.6rem] rounded-full border-2 border-black">Brewing Gear</button>
                        <button className="px-8 py-[0.6rem] rounded-full border-2 border-black">Merchandise</button>
                    </div>
                    <div className="w-full h-full flex flex-wrap justify-between gap-5 px-3 lg:px-0">
                        <div className="w-full sm:w-[45%] lg:w-[32%] h-[50vh] lg:h-[50vh] lg:h-[60vh] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop">
                            <div className="w-full h-4/6 flex rounded-3xl" id="coffee_1">
                                <div className="w-full h-1/3 p-4">
                                    <i class='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                                </div>
                            </div>
                            <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                                <div className="w-full h-1/2 flex flex-wrap">
                                    <h1 className="w-full text-3xl">Marsha</h1>
                                    <h1 className="text-gray-500">Cherry truffle, Blueberry, Kakao nibs</h1>
                                </div>
                                <div className="w-full h-1/2 flex justify-between items-center">
                                    <h1 className="text-xl">$12 – $39</h1>
                                    <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[45%] lg:w-[32%] h-[50vh] lg:h-[60vh] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop">
                            <div className="w-full h-4/6 flex rounded-3xl" id="coffee_2">
                                <div className="w-full h-1/3 p-4">
                                    <i class='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                                </div>
                            </div>
                            <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                                <div className="w-full h-1/2 flex flex-wrap">
                                    <h1 className="w-full text-3xl">Marsha</h1>
                                    <h1 className="text-gray-500">Cherry truffle, Blueberry, Kakao nibs</h1>
                                </div>
                                <div className="w-full h-1/2 flex justify-between items-center">
                                    <h1 className="text-xl">$12 – $39</h1>
                                    <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[45%] lg:w-[32%] h-[50vh] lg:h-[60vh] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop">
                            <div className="w-full h-4/6 flex rounded-3xl" id="coffee_3">
                                <div className="w-full h-1/3 p-4">
                                    <i class='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                                </div>
                            </div>
                            <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                                <div className="w-full h-1/2 flex flex-wrap">
                                    <h1 className="w-full text-3xl">Marsha</h1>
                                    <h1 className="text-gray-500">Cherry truffle, Blueberry, Kakao nibs</h1>
                                </div>
                                <div className="w-full h-1/2 flex justify-between items-center">
                                    <h1 className="text-xl">$12 – $39</h1>
                                    <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[45%] lg:w-[32%] h-[50vh] lg:h-[60vh] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop">
                            <div className="w-full h-4/6 flex rounded-3xl" id="coffee_4">
                                <div className="w-full h-1/3 p-4">
                                    <i class='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                                </div>
                            </div>
                            <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                                <div className="w-full h-1/2 flex flex-wrap">
                                    <h1 className="w-full text-3xl">Marsha</h1>
                                    <h1 className="text-gray-500">Cherry truffle, Blueberry, Kakao nibs</h1>
                                </div>
                                <div className="w-full h-1/2 flex justify-between items-center">
                                    <h1 className="text-xl">$12 – $39</h1>
                                    <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[45%] lg:w-[32%] h-[50vh] lg:h-[60vh] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop">
                            <div className="w-full h-4/6 flex rounded-3xl" id="coffee_5">
                                <div className="w-full h-1/3 p-4">
                                    <i class='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                                </div>
                            </div>
                            <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                                <div className="w-full h-1/2 flex flex-wrap">
                                    <h1 className="w-full text-3xl">Marsha</h1>
                                    <h1 className="text-gray-500">Cherry truffle, Blueberry, Kakao nibs</h1>
                                </div>
                                <div className="w-full h-1/2 flex justify-between items-center">
                                    <h1 className="text-xl">$12 – $39</h1>
                                    <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[45%] lg:w-[32%] h-[50vh] lg:h-[60vh] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop">
                            <div className="w-full h-4/6 flex rounded-3xl" id="coffee_6">
                                <div className="w-full h-1/3 p-4">
                                    <i class='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                                </div>
                            </div>
                            <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                                <div className="w-full h-1/2 flex flex-wrap">
                                    <h1 className="w-full text-3xl">Marsha</h1>
                                    <h1 className="text-gray-500">Cherry truffle, Blueberry, Kakao nibs</h1>
                                </div>
                                <div className="w-full h-1/2 flex justify-between items-center">
                                    <h1 className="text-xl">$12 – $39</h1>
                                    <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}