import { useContext, useEffect } from "react";
import Footer_v2 from "../layout/Footer/footer-v2";
import { ListeItems } from "../../utils/Liste-items";

export default function Products_section_1() {
    const { Index_Items, setIndex_Items } = useContext(ListeItems);

    const items_info = [
        {
            id: 1,
            title: "Marsha",
            price: "$12 – $39",
            description: "Marsha is a premium coffee blend that delivers a rich and robust flavor. It combines select Arabica beans to achieve a perfectly balanced taste. Each cup reveals delightful notes of chocolate and caramel. Ideal for both morning brews and afternoon indulgence. Enjoy a smooth, full-bodied experience with every sip. This blend is a favorite among coffee enthusiasts."
        },
        {
            id: 2,
            title: "V60 Dripper",
            price: "$49",
            description: "The V60 Dripper is engineered for precise coffee extraction with its innovative design. Its spiral ribs and large hole allow for optimal flow and control during brewing. Made from high-quality materials, it ensures long-lasting durability. Perfect for brewing a clean, flavorful cup of coffee. The dripper's design enhances your coffee's aroma and taste. Ideal for both beginners and experienced coffee makers."
        },
        {
            id: 3,
            title: "Porcelain Cup",
            price: "$39",
            description: "This elegant porcelain cup adds a touch of sophistication to your coffee routine. Crafted with fine craftsmanship, it enhances the overall drinking experience. Its smooth surface is perfect for both hot and cold beverages. The cup's classic design complements any kitchen decor. Enjoy your favorite drinks in style with this timeless piece. Ideal for both casual and formal settings."
        },
        {
            id: 4,
            title: "T-shirt Green",
            price: "$79",
            description: "Our green T-shirt is made from 100% premium cotton, ensuring maximum comfort throughout the day. The vibrant green color adds a pop of style to your wardrobe. Soft and breathable fabric makes it perfect for everyday wear. Available in various sizes to suit all body types. Durable and easy to care for, maintaining its quality wash after wash. A must-have for any casual outfit."
        },
        {
            id: 5,
            title: "V60 Paper Filter",
            price: "$19",
            description: "These high-quality paper filters are designed for the V60 Dripper, ensuring a clean and smooth brew. They effectively absorb oils and impurities from your coffee. Each pack contains a generous quantity for daily use. They contribute to a refined and enjoyable coffee experience. Compatible with all V60 models. Essential for achieving the perfect cup every time."
        },
        {
            id: 6,
            title: "Aeropress GO",
            price: "$19",
            description: "The Aeropress GO is a compact and travel-friendly coffee maker. Designed for convenience, it fits easily into any bag, making it perfect for on-the-go brewing. Enjoy rich and smooth coffee wherever your travels take you. The innovative design includes a travel cap for easy storage. Quick and easy to use, it delivers a perfect cup every time. Ideal for coffee lovers who are always on the move."
        },
    ];



    const items_content = [
        { id: 1, content: ['Premium Arabica beans', 'Balanced acidity', 'Notes of chocolate and caramel', 'Perfect for espresso and drip'] },
        { id: 2, content: ['Made from durable plastic', 'Includes measuring scoop', 'Easy to clean', 'Compatible with various filters'] },
        { id: 3, content: ['Handcrafted design', 'Microwave and dishwasher safe', 'Ideal for both hot and cold beverages'] },
        { id: 4, content: ['100% cotton', 'Available in various sizes', 'Soft and breathable fabric', 'Machine washable'] },
        { id: 5, content: ['High-density paper', 'Absorbs oils and impurities', 'Ensures a clean cup', 'Compatible with V60 drippers'] },
        { id: 6, content: ['Compact and lightweight', 'Comes with a travel cap', 'Easy to use and clean', 'Ideal for travel'] },
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
        setIndex_Items(Index_Items.slice(-1))
    }, []);


    return <>
        {Index_Items.length > 0 ? items_info.filter(items => items.id == Index_Items).map(item => (
            <section className="w-full h-full flex flex-wrap gap-8 lg:gap-0">
                <div className="w-full lg:w-1/2 h-full flex flex-wrap px-8 lg:px-0 lg:pl-16 lg:pr-14 pt-14 lg:pb-8 gap-5 lg:gap-2 lg:fixed">
                    <div className="w-full h-[40%] flex flex-col justify-center gap-5">
                        <div className="w-full lg:w-4/5 h-1/3 flex justify-center lg:justify-start flex-wrap gap-3 lg:gap-0">
                            <h1 className="w-full text-5xl text-center lg:text-start">{item.title}</h1>
                            <p>Cherry truffle, Blueberry, Kakao nibs</p>
                        </div>
                        <div className="w-full lg:w-4/5 h-1/3 flex items-center justify-center lg:justify-start gap-5">
                            <h1 className="text-[1.50rem]">{item.price}</h1>
                            <button className="text-lg px-8 py-2 rounded-full bg-black text-white">Add To Cart</button>
                        </div>
                    </div>
                    <div className="w-full h-[55%] flex flex-col pt-5 lg:pt-8 gap-16 border-t border-black">
                        <p className="text-center lg:text-start">
                            {item.description}
                        </p>
                        <div className="w-full xl:w-1/2 flex flex-wrap gap-2">
                            <h1 className="w-full text-xl">Contents :</h1>
                            <div>
                                {items_content.filter(info => info.id == Index_Items).map(itemcontent => {
                                    return itemcontent.content.map((contentItem, index) => <li key={index}>{contentItem}</li>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full hidden lg:flex">

                </div>
                <div className="w-full lg:w-1/2 h-full flex flex-wrap p-2">
                    <div className="w-full h-[50vh] lg:h-screen rounded-3xl" id={`background-image-cards-${Index_Items}`}>

                    </div>
                    <div className="w-full h-[50vh] lg:h-screen rounded-3xl mt-8 lg:mt-5" id={`background-image-cards-Products-${Index_Items}`}>

                    </div>
                    <Footer_v2 />
                </div>
            </section>
        )) : (
            <section className="w-full h-screen flex justify-center items-center">
                <h1 className="text-5xl">No Products Available</h1>
            </section>
        )}
    </>
}