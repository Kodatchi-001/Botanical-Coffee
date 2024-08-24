import { useEffect } from "react"

export default function Header_v2() {
    return <>
        {/*Navbar-V2*/}
        <header className=" flex justify-between items-center flex-wrap rounded-3xl overflow-hidden px-7 py-5 text-white border-transparent-navbar z-50 fixed">
            <div className="w-full h-4/5">

            </div>
            <div className="w-full h-full flex justify-between gap-6 cursor-pointer">
                <i class='bx bx-menu text-orange-500 text-4xl'></i>
                <h1 className="text-3xl flex items-center">botanical</h1>
            </div>
        </header>
    </>
}