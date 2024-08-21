import coffee from "../../assets/coffee.png";
import coffee_2 from "../../assets/coffee-2.png";


export default function Section_3() {
    return <>
        <section className="w-full lg:h-screen flex flex-wrap lg:px-8 xl:px-36 mt-10">
            <div className="w-full h-1/3 flex justify-center lg:justify-start items-center gap-8 lg:gap-0 flex-wrap lg:flex-nowrap">
                <h1 className="text-5xl lg:text-[5.2rem] lg:leading-[13vh] text-center lg:text-start">
                    Unnecessarily Good Good(s)
                </h1>
                <div className="w-full lg:w-4/6 xl:w-full h-full flex justify-center lg:justify-start items-end pb-8">
                    <a href="" className="text-lg px-8 py-2 rounded-full bg-black text-white">
                        Shop All
                    </a>
                </div>
            </div>
            <div className="w-full h-2/3 flex justify-between items-center flex-wrap gap-6 lg:gap-0 px-2 lg:px-0">
                <div className="w-full sm:w-[45%] lg:w-[31.5%] lg:h-[80%] xl:h-[95%] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop relative">
                    <div className="w-full h-4/6 flex relative">
                        <div className="w-full h-full rounded-3xl overflow-hidden">
                            <img src={coffee} className="w-full h-full rounded-3xl" />
                        </div>
                        <div className="w-full h-1/3 p-4 absolute">
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
                <div className="w-full sm:w-[45%] lg:w-[31.5%] lg:h-[80%] xl:h-[95%] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop relative">
                    <div className="w-full h-4/6 flex relative">
                        <div className="w-full h-full rounded-3xl overflow-hidden">
                            <img src={coffee} className="w-full h-full rounded-3xl" />
                        </div>
                        <div className="w-full h-1/3 p-4 absolute">
                            <i class='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                        </div>
                    </div>
                    <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                        <div className="w-full h-1/2 flex flex-wrap">
                            <h1 className="w-full text-3xl">Gogogu</h1>
                            <h1 className="text-gray-500">Cherry truffle, Blueberry, Kakao nibs</h1>
                        </div>
                        <div className="w-full h-1/2 flex justify-between items-center">
                            <h1 className="text-xl">$12 – $39</h1>
                            <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-[45%] lg:w-[31.5%] lg:h-[80%] xl:h-[95%] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop relative">
                    <div className="w-full h-4/6 flex relative">
                        <div className="w-full h-full rounded-3xl overflow-hidden">
                            <img src={coffee_2} className="w-full h-full rounded-3xl" />
                        </div>
                        <div className="w-full h-1/3 p-4 absolute">
                            <i class='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                        </div>
                    </div>
                    <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                        <div className="w-full h-1/2 flex flex-wrap">
                            <h1 className="w-full text-3xl">V60 Dripper</h1>
                            <h1 className="text-gray-500">Cherry truffle, Blueberry, Kakao nibs</h1>
                        </div>
                        <div className="w-full h-1/2 flex justify-between items-center">
                            <h1 className="text-xl">$49</h1>
                            <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}