import { Link } from "react-router-dom";
import Note_found  from "../../assets/not-found.png";

export default function Not_Found_section() {
    return <>
        <section className="w-full h-screen flex justify-center items-center px-6 xl:px-0 bg-white">
            <div className="w-full xl:w-5/6 h-5/6 flex flex-wrap">
                <div className="w-full lg:w-1/2 h-full flex items-center">
                    <div className="w-full h-4/6 flex flex-col gap-24">
                        <div className="flex flex-col gap-7">
                            <h1 className="text-6xl lg:text-7xl text-yellow-400">Sorry!, this page isn’t available</h1>
                            <p className="w-5/6 lg:w-full text-xl">The page you were looking for couldn’t be found .</p>
                        </div>
                        <p className="text-[1.1rem]">Go back to the <Link to="/" className="text-yellow-400 font-bold">Home Page</Link></p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-full hidden lg:flex justify-center items-center">
                    <div className="w-[80%] lg:w-full xl:w-[80%] h-5/6 lg:h-4/6 xl:h-5/6">
                        <img src={Note_found} className="w-full h-full rounded-full" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
}