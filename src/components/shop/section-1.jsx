import { useContext, useState } from "react";
import Footer from "../footer";
import Header_v2 from "../header-v2";
import { Link } from "react-router-dom";
import { ListeItems } from "../../utils/Liste-items";

export default function Shop_section_1() {
    const [filter, setFilter] = useState("All");
    const { Index_Items, setIndex_Items } = useContext(ListeItems);

    const filterItems = category => setFilter(category);

    const items = [
        { id: 1, category: "Coffee", title: "Marsha", description: "Cherry truffle, Blueberry, Kakao nibs", price: "$12 – $39" },
        { id: 2, category: "Gear", title: "V60 Dripper", description: "Cherry truffle, Blueberry, Kakao nibs", price: "$49" },
        { id: 3, category: "Merchandise", title: "Porcelain Cup", description: "Cherry truffle, Blueberry, Kakao nibs", price: "$39" },
        { id: 4, category: "Merchandise", title: "T-shirt Green", description: "Cherry truffle, Blueberry, Kakao nibs", price: "$79" },
        { id: 5, category: "Gear", title: "V60 Paper filter", description: "Cherry truffle, Blueberry, Kakao nibs", price: "$19" },
        { id: 6, category: "Gear", title: "Aeropress GO", description: "Cherry truffle, Blueberry, Kakao nibs", price: "$19" },
    ];
    const SendIndex = index => setIndex_Items([...Index_Items, index]);

    return <>
        <section className="w-full h-full flex flex-wrap mb-14">
            <div className="w-full h-[15vh] lg:h-[10vh] flex justify-end p-5">
                <div className="fixed">
                    <Header_v2 Color={"black"} border={"border-black"} />
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
                <div className="w-full h-full flex flex-wrap gap-8 lg:gap-5">
                    <div className="w-full h-[12vh] flex justify-center lg:justify-start items-center flex-wrap gap-2 text-xl">
                        <button
                            className={`px-8 py-[0.6rem] rounded-full ${filter == "All" ? "bg-black text-white" : "border-2 border-black"}`}
                            onClick={() => filterItems("All")}>
                            View All
                        </button>
                        <button
                            className={`px-8 py-[0.6rem] rounded-full ${filter == "Coffee" ? "bg-black text-white" : "border-2 border-black"}`}
                            onClick={() => filterItems("Coffee")}>
                            Coffee
                        </button>
                        <button
                            className={`px-8 py-[0.6rem] rounded-full ${filter == "Gear" ? "bg-black text-white" : "border-2 border-black"}`}
                            onClick={() => filterItems("Gear")}>
                            Brewing Gear
                        </button>
                        <button
                            className={`px-8 py-[0.6rem] rounded-full ${filter == "Merchandise" ? "bg-black text-white" : "border-2 border-black"}`}
                            onClick={() => filterItems("Merchandise")}>
                            Merchandise
                        </button>
                    </div>
                    <div className="w-full h-full flex flex-wrap gap-5 px-3 lg:px-0">
                        {items
                            .filter(item => filter === "All" || item.category === filter)
                            .map(item => (
                                <div key={item.id} className="w-full sm:w-[45%] lg:w-[32%] h-[50vh] lg:h-[60vh] rounded-3xl flex flex-col justify-between p-3 gap-3 lg:gap-0 bg-white cards-shop">
                                    <div className="w-full h-4/6 flex rounded-3xl">
                                        <div className="w-full h-full rounded-3xl" id={`background-image-cards-${item.id}`}>
                                            <div className="w-full h-1/3 p-4">
                                                <i className='bx bxs-heart text-xl button-blur-icone px-4 py-3 rounded-full text-white'></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-[30%] flex flex-wrap lg:gap-2 xl:gap-0">
                                        <div className="w-full h-1/2 flex flex-wrap gap-2">
                                            <h1 className="w-full text-3xl">{item.title}</h1>
                                            <h1 className="text-gray-500">{item.description}</h1>
                                        </div>
                                        <div className="w-full h-1/2 flex justify-between items-center">
                                            <h1 className="text-xl">{item.price}</h1>
                                            <Link to="/Products" onClick={() => SendIndex(item.id)}>
                                                <i className="bx bx-chevron-right text-5xl p-2 scale-90 rounded-full cursor-pointer bg-black text-white"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}