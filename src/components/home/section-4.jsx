export default function Section_4() {
    return <>
        <section className="w-full lg:h-[115vh] lg:px-8 xl:px-36 mt-16 flex flex-wrap gap-6 lg:gap-0">
            <div className="w-full h-1/4 flex justify-center lg:justify-between items-center flex-wrap-reverse gap-6 lg:gap-0">
                <p className="w-5/6 text-center lg:text-start lg:w-1/3">
                    We go places that others wouldn’t.
                    For us, “too far” is exactly where we
                    want to be. All in the name of coffee.
                </p>
                <h1 className="text-5xl lg:text-[5.2rem]">
                    Another Menu
                </h1>
            </div>
            <div className="w-full h-3/4 flex flex-col justify-between flex-wrap gap-6 lg:gap-0 p-2 lg:p-0">
                <div className="w-full h-[48.2%] flex justify-between items-center flex-wrap gap-6 lg:gap-0">
                    <div className="w-full sm:w-[45%] lg:w-[64%] h-full rounded-3xl flex flex-wrap p-4 py-6 gap-5 lg:gap-0 text-white cards-section-4" id="menu-1">
                        <div className="w-full h-[75%] flex justify-end items-start">
                            <i className="bx bx-chevron-right text-5xl p-2 scale-75 rounded-full cursor-pointer text-white border-2 border-white"></i>
                        </div>
                        <div className="w-full h-[25%] flex flex-col justify-around px-5 py-2 lg:py-5 gap-5 lg:gap-0 rounded-3xl overflow-hidden">
                            <h1 className="w-full lg:mb-5 text-5xl">Locations</h1>
                            <p className="text-gray-200">
                                All critical efforts along the journey result in coffees that are a sum
                                of choices made with the single goal in mind: how does the final product
                                taste in your cup.
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[45%] lg:w-[34%] h-full rounded-3xl flex flex-wrap p-4 py-6 gap-5 lg:gap-0 text-white cards-section-4" id="menu-2">
                        <div className="w-full h-[75%] flex justify-end items-start">
                            <i className="bx bx-chevron-right text-5xl p-2 scale-75 rounded-full cursor-pointer text-white border-2 border-white"></i>
                        </div>
                        <div className="w-full h-[25%] flex flex-col justify-around px-5 py-2 lg:py-5 gap-5 lg:gap-0 rounded-3xl overflow-hidden">
                            <h1 className="w-full lg:mb-5 text-5xl">Menu</h1>
                            <p className="text-md text-gray-200">
                                It doesn’t have to taste that way. But it does.
                                It’s not your typical. It's unnecessarily good.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[48.2%] flex justify-between items-center flex-wrap gap-6 lg:gap-0">
                    <div className="w-full sm:w-[45%] lg:w-[34%] h-full rounded-3xl flex flex-wrap p-4  py-6  gap-5 lg:gap-0 text-white cards-section-4" id="menu-3">
                        <div className="w-full h-[75%] flex justify-end items-start">
                            <i className="bx bx-chevron-right text-5xl p-2 scale-75 rounded-full cursor-pointer text-white border-2 border-white"></i>
                        </div>
                        <div className="w-full h-[25%] flex flex-col justify-around px-5 py-5 gap-5 rounded-3xl overflow-hidden">
                            <h1 className="w-full mb-2 text-5xl">Shop</h1>
                            <p className="text-md text-gray-200">
                                Unnecessarily Good Good(s).
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[45%] lg:w-[64%] h-full rounded-3xl flex flex-wrap p-4 py-6 gap-5 lg:gap-0 text-white cards-section-4" id="menu-4">
                        <div className="w-full h-[75%] flex justify-end items-start">
                            <i className="bx bx-chevron-right text-5xl p-2 scale-75 rounded-full cursor-pointer text-white border-2 border-white"></i>
                        </div>
                        <div className="w-full h-[25%] flex flex-col justify-around px-5 py-2 lg:py-5 gap-5 lg:gap-0 rounded-3xl overflow-hidden">
                            <h1 className="w-full lg:mb-5 text-5xl">Work with us</h1>
                            <p className="text-md text-gray-200">
                                Explore exciting opportunities in our Jobs section and brew success with
                                us in a vibrant, welcoming environment where your love for coffee thrives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}