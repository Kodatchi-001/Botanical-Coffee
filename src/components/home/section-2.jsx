import { useEffect } from "react";

export default function Section_2() {
    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 1024;
            const cards = document.querySelectorAll('.cards');

            const handleClick = e => {
                if (isDesktop) {
                    cards.forEach(card => {
                        card.style.width = '25%';
                        card.style.filter = 'grayscale(100%)';
                    });
                    e.currentTarget.style.width = '45%';
                    e.currentTarget.style.filter = 'grayscale(0%)';
                }
            };

            if (isDesktop) {
                cards.forEach(card => {
                    card.addEventListener('mouseover', handleClick);
                });
            } else {
                cards.forEach(card => {
                    card.removeEventListener('mouseover', handleClick);
                });
            }

            return () => {
                cards.forEach(card => {
                    card.removeEventListener('mouseover', handleClick);
                });
            };
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>
        <section className="w-full lg:h-screen mt-5 lg:px-8 xl:px-36 lg:py-8" id="section-1">
            <div className="w-full h-full">
                <div className="w-full h-1/3 flex justify-between items-center flex-wrap gap-5 lg:gap-0">
                    <div className="w-full lg:w-1/2 h-full flex justify-center lg:justify-between items-center flex-wrap">
                        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start gap-4">
                            <h1 className="w-full text-center lg:text-start text-4xl">From Greenies to Delight.</h1>
                            <h1 className="text-lg text-gray-500">All in the name of coffee.</h1>
                        </div>
                        <div className="w-1/2 h-full lg:flex justify-end items-center px-5 hidden">
                            <div className="w-[75%] h-[55%] rounded-2xl" id="cercle-3"></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
                        <p className="w-full lg:w-[90%] text-center lg:text-start text-2xl lg:text-3xl leading-[5vh] lg:leading-[6vh]">
                            It doesn’t have <span className="px-16 py-1 rounded-full ml-3 mr-3" id="cercle-2-section-1"></span> to taste that way.
                            But it does. It’s not your typical.It's unnecessarily good.
                        </p>
                    </div>
                </div>
                <div className="w-full h-2/3 flex justify-between items-center flex-wrap gap-5 sm:gap-1 lg::gap-0 mt-5 lg:mt-0 p-2 lg:p-0">
                    <div className="w-full sm:w-[48%] lg::w-[45%] h-4/5 flex flex-col justify-between rounded-3xl p-7 cursor-pointer cards gap-6 lg:gap-0" id="cercle-1-section-1">
                        <div className="w-full h-1/3 flex justify-between">
                            <div className="w-5/6 h-full flex flex-col justify-between text-white tittle-cards">
                                <h1 className="text-4xl mb-5">Prague</h1>
                                <p className="w-full lg:w-[90%] text-md">Botanical Coffee Shop in Prague offers a serene oasis with its lush decor and artisanal coffees.</p>
                            </div>
                            <div className="w-[10%] h-full flex justify-center items-center cursor-pointer icone-cards">
                                <i class='bx bx-chevron-right text-4xl px-3 py-2 rounded-full bg-white'></i>
                            </div>
                        </div>
                        <div className="w-full h-1/3 flex items-end">
                            <div className="w-full h-[65%] flex items-end text-white border-blur gap-2 py-4 lg:py-0">
                                <a href="" className="py-1 px-1 pr-6 text-lg flex items-center justify-between gap-4 rounded-full button-blur">
                                    <i class='bx bxs-map rounded-full p-2 button-blur' ></i>
                                    Navigate
                                </a>
                                <div className="w-4/5 h-[65%] flex flex-wrap text-sm tittle-cards-2">
                                    <h1 className="w-full">Monday to Sunday</h1>
                                    <h1>09 AM — 07 PM</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[25%] h-4/5 flex flex-col justify-between rounded-3xl p-7 cursor-pointer cards gap-6 lg:gap-0" id="cercle-2-section-1">
                        <div className="w-full h-1/3 flex justify-between">
                            <div className="w-5/6 h-full flex flex-col justify-between text-white tittle-cards">
                                <h1 className="text-4xl mb-5">Berlin</h1>
                                <p className="w-full lg:w-[90%] text-md">Berlin's dynamic coffee culture features innovative shops where baristas experiment with new brewing techniques.</p>
                            </div>
                            <div className="w-[10%] h-full flex justify-center items-center cursor-pointer icone-cards">
                                <i class='bx bx-chevron-right text-4xl px-3 py-2 rounded-full bg-white'></i>
                            </div>
                        </div>
                        <div className="w-full h-1/3 flex items-end">
                            <div className="w-full h-[65%] flex items-end text-white border-blur gap-2 py-4 lg:py-0">
                                <a href="" className="py-1 px-1 pr-6 text-lg flex items-center justify-between gap-4 rounded-full button-blur">
                                    <i class='bx bxs-map rounded-full p-2 button-blur' ></i>
                                    Navigate
                                </a>
                                <div className="w-4/5 h-[65%] flex flex-wrap text-sm tittle-cards-2">
                                    <h1 className="w-full">Monday to Sunday</h1>
                                    <h1>09 AM — 07 PM</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[25%] h-4/5 flex flex-col justify-between rounded-3xl p-7 cursor-pointer cards gap-6 lg:gap-0" id="cercle-3-section-1">
                        <div className="w-full h-1/3 flex justify-between">
                            <div className="w-5/6 h-full flex flex-col justify-between text-white tittle-cards">
                                <h1 className="text-4xl mb-5">Vienna</h1>
                                <p className="w-full lg:w-[90%] text-md">Vienna's coffee scene blends historic cafes and modern spots, all dedicated to perfecting the art of coffee making.</p>
                            </div>
                            <div className="w-[10%] h-full flex justify-center items-center cursor-pointer icone-cards">
                                <i class='bx bx-chevron-right text-4xl px-3 py-2 rounded-full bg-white'></i>
                            </div>
                        </div>
                        <div className="w-full h-1/3 flex items-end">
                            <div className="w-full h-[65%] flex items-end text-white border-blur gap-2 py-4 lg:py-0">
                                <a href="" className="py-1 px-1 pr-6 text-lg flex items-center justify-between gap-4 rounded-full button-blur">
                                    <i class='bx bxs-map rounded-full p-2 button-blur' ></i>
                                    Navigate
                                </a>
                                <div className="w-4/5 h-[65%] flex flex-wrap text-sm tittle-cards-2">
                                    <h1 className="w-full">Monday to Sunday</h1>
                                    <h1>09 AM — 07 PM</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
}