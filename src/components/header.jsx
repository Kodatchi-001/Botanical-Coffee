export default function Header() {
    return <>
    {/*Navbar-V1*/}
        <header className="w-[95%] h-4/6 px-5 lg:flex justify-between rounded-full header-border border-white overflow-hidden hidden">
            <ul className="w-1/4 h-full lg:flex items-center gap-2 text-black">
                <li className="px-8 py-2 rounded-full text-lg bg-white cursor-pointer Animation-header-left z-20">
                    <a href="">Home</a>
                </li>
                <li className="px-8 py-2 rounded-full text-xl text-white border-2 border-transparent cursor-pointer Animation-header-left z-10">
                    <a href="">Menu</a>
                </li>
            </ul>
            <ul className="w-1/4 h-full lg:flex justify-end items-center gap-2 text-black">
                <li className="px-8 py-2 rounded-full text-xl text-white border-2 border-transparent cursor-pointer Animation-header-right">
                    <a href="">Locations</a>
                </li>
                <li className="px-8 py-2 rounded-full text-xl text-white border-2 border-transparent cursor-pointer Animation-header-right">
                    <a href="">Jobs</a>
                </li>
                <li className="px-2 py-1 rounded-full text-xl text-white border-2 border-transparent cursor-pointer Animation-header-right">
                    <i class='bx bx-cart text-2xl text-orange-500'></i>
                </li>
            </ul>
        </header>
        {/*Navbar-V2*/}
        <header className="w-[45%] lg:h-4/6 flex justify-between items-center rounded-3xl overflow-hidden fixed px-5 py-4 text-white border-transparent-navbar lg:hidden">
            <div className="w-full h-full flex justify-between">
                <i class='bx bx-menu text-orange-500 text-3xl'></i>
                <h1 className="text-2xl flex items-center">botanical</h1>
            </div>
        </header>
    </>
}