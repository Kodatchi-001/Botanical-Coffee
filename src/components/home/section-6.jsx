import { useEffect, useState } from "react"

export default function Section_6() {
    const [indexcards, setindexcards] = useState(null)
    const isDesktop = window.innerWidth >= 1024;

    useEffect(() => {
        const cards = document.querySelectorAll('.cards-section-6');
        const handleClick = e => {
            cards.forEach(card => {
                isDesktop ? card.style.height = '22%' : card.style.height = '20%';
                card.querySelector('div:first-child').style.height = '100%'
                card.querySelector('i').style.rotate = '0deg'
            })
            if (indexcards == e.currentTarget) {
                e.currentTarget.style.height = ' ';
                e.currentTarget.querySelector('div:first-child').style.height = ' '
                e.currentTarget.querySelector('i').style.rotate = ' '
                setindexcards(null)
            }
            else {
                isDesktop ? e.currentTarget.style.height = '28%' : e.currentTarget.style.height = '50%';
                e.currentTarget.querySelector('div:first-child').style.height = '60%'
                e.currentTarget.querySelector('i').style.rotate = '90deg'
                setindexcards(e.currentTarget)
            }
        }
        cards.forEach(card => {
            card.addEventListener('click', handleClick);
        });
        return () => {
            cards.forEach(card => {
                card.removeEventListener('click', handleClick);
            });
        };
    }, [indexcards]);

    return <>
        <section className="w-full h-[70vh] lg:h-screen flex items-center px-2 lg:px-8 xl:px-36 2xl:px-96 mt-4">
            <div className="w-full h-[80%] flex flex-col justify-between gap-5 lg:gap-0">
                <div className="w-full h-[20%] lg:h-[22%] px-6 lg:pl-12 lg:pr-8 rounded-3xl cursor-pointer flex-wrap overflow-hidden border border-black cards-section-6">
                    <div className="w-full h-full flex justify-between items-center">
                        <h1 className="text-2xl lg:text-[2.20rem]">Do you offer non-dairy milk options?</h1>
                        <i class='bx bx-chevron-right text-5xl p-3 rounded-full scale-75 border border-black'></i>
                    </div>
                    <div className="w-full h-[40%] text-lg">
                        <p>Yes, we offer almond, soy, and oat milk as non-dairy alternatives.</p>
                    </div>
                </div>
                <div className="w-full h-[20%] lg:h-[22%] px-6 lg:pl-12 lg:pr-8 rounded-3xl cursor-pointer flex-wrap overflow-hidden border border-black cards-section-6">
                    <div className="w-full h-full flex justify-between items-center">
                        <h1 className="text-2xl lg:text-[2.20rem]">Can I order online for pickup?</h1>
                        <i class='bx bx-chevron-right text-5xl p-3 rounded-full scale-75 border border-black'></i>
                    </div>
                    <div className="w-full h-[40%] text-lg">
                        <p>Absolutely! You can place your order online through our website for quick and easy pickup.</p>
                    </div>
                </div>
                <div className="w-full h-[20%] lg:h-[22%] px-6 lg:pl-12 lg:pr-8 rounded-3xl cursor-pointer flex-wrap overflow-hidden border border-black cards-section-6">
                    <div className="w-full h-full flex justify-between items-center">
                        <h1 className="text-2xl lg:text-[2.20rem]">Do you have free Wi-Fi?</h1>
                        <i class='bx bx-chevron-right text-5xl p-3 rounded-full scale-75 border border-black'></i>
                    </div>
                    <div className="w-full h-[40%] text-lg">
                        <p>Yes, we offer free Wi-Fi to all our customers. Just ask our staff for the password.</p>
                    </div>
                </div>
                <div className="w-full h-[20%] lg:h-[22%] px-6 lg:pl-12 lg:pr-8 rounded-3xl cursor-pointer flex-wrap overflow-hidden border border-black cards-section-6">
                    <div className="w-full h-full flex justify-between items-center">
                        <h1 className="text-2xl lg:text-[2.20rem]">Where are you located?</h1>
                        <i class='bx bx-chevron-right text-5xl p-3 rounded-full scale-75 border border-black'></i>
                    </div>
                    <div className="w-full h-[40%] text-lg">
                        <p>We are located at 123 Main Street, right in the heart of downtown.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}