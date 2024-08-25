import Footer_v2 from "../footer-v2";

export default function Products_section_1() {
    return <>
        <section className="w-full h-full flex flex-wrap gap-8 lg:gap-0">
            <div className="w-full lg:w-1/2 h-full flex flex-wrap px-8 lg:px-0 lg:pl-16 lg:pr-14 pt-14 lg:pb-8 gap-5 lg:fixed">
                <div className="w-full h-[40%] flex flex-col justify-center gap-5">
                    <div className="w-full lg:w-4/5 h-1/3 flex justify-center lg:justify-start flex-wrap gap-3 lg:gap-0">
                        <h1 className="w-full text-5xl text-center lg:text-start">Aeropress GO</h1>
                        <p>Cherry truffle, Blueberry, Kakao nibs</p>
                    </div>
                    <div className="w-full lg:w-4/5 h-1/3 flex items-center justify-center lg:justify-start gap-5">
                        <h1 className="text-[1.50rem]">$19</h1>
                        <button className="text-lg px-8 py-2 rounded-full bg-black text-white">Add To Cart</button>
                    </div>
                </div>
                <div className="w-full h-[60%] pt-6 flex flex-col justify-center gap-8 border-t border-black">
                    <p className="text-center lg:text-start">
                        Invented in 2005 by Alan Adler, the AeroPress is one of the most recent innovations
                        in coffee brewing devices. It offers various brewing methods and serving options, from
                        a high-concentrate espresso to a delicate filter coffee. Due to its compact design and consistent
                        results, it quickly became a favorite among coffee enthusiasts and baristas, even inspiring annual
                        world championships to determine the best AeroPress coffee.
                    </p>
                    <div className="w-full xl:w-1/2 h-1/2 flex flex-wrap gap-3">
                        <h1 className="w-full text-xl">Contents :</h1>
                        <div>
                            <li>1 x AeroPress Go</li>
                            <li>1 x filter holder</li>
                            <li>1 x 350 micro-filters in a storage carton</li>
                            <li>1 x filter cap</li>
                            <li>1 x scoop</li>
                            <li>1 x stirrer</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full hidden lg:flex">

            </div>
            <div className="w-full lg:w-1/2 h-full flex flex-wrap p-2">
                <div className="w-full h-[50vh] lg:h-screen rounded-3xl" id="background-image-cards-6">

                </div>
                <div className="w-full h-[50vh] lg:h-screen rounded-3xl mt-8 lg:mt-5" id="background-image-cards-3-1">

                </div>
                <Footer_v2 />
            </div>
        </section>
    </>
}