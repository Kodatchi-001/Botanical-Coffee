import Footer_v2 from "../footer-v2";

export default function Jobs_section_1() {
    return <>
        <section className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 h-[40vh] lg:h-full lg:fixed px-2 py-3">
                <div className="w-full h-full flex flex-col justify-between rounded-3xl p-3 pb-9 pl-8 background-image-jobs">
                    <h1 className="text-5xl lg:text-7xl text-white mt-auto">Jobs</h1>
                </div>
            </div>
            <div className="w-1/2 h-full hidden lg:flex">

            </div>
            <div className="w-full lg:w-1/2 h-full px-2 py-3">
                <div className="w-full h-full flex justify-center lg:justify-start flex-wrap rounded-3xl px-8 lg:px-0 lg:pl-28 lg:pr-8 gap-8 lg:gap-0">
                    <div className="w-[85%] h-[60vh] lg:flex flex-col justify-center gap-7 hidden">
                        <h1 className="text-center lg:text-start text-3xl">
                            Join our passionate team at Botanical!
                        </h1>
                        <p className="text-center lg:text-start text-3xl">
                            Explore exciting opportunities in our Jobs section
                            and brew success with us in a vibrant, welcoming
                            environment where your love for coffee thrives.
                        </p>
                    </div>
                    <div className="w-full lg:w-5/6 lg:h-[70vh] flex flex-col justify-center items-start gap-8 lg:gap-10 lg:border-t border-gray-500">
                        <h1 className="w-full text-5xl lg:text-6xl ">Barista</h1>
                        <p>
                            At Botanica Cafe, we're seeking skilled and enthusiastic baristas to
                            join our team of coffee artisans. If you're passionate about crafting the
                            perfect cup and creating memorable experiences for our customers, bring your
                            expertise to Botanica and let's brew excellence together
                        </p>
                        <button className="px-8 py-3 bg-black text-white rounded-full">
                            Apply Now
                        </button>
                    </div>
                    <div className="w-full lg:w-5/6 lg:h-[70vh] flex flex-col justify-center items-start gap-8 lg:gap-10 lg:border-t border-gray-500">
                        <h1 className="w-full text-5xl lg:text-6xl ">Café Manager</h1>
                        <p>
                            Join us at Botanica Café as a Café Manager and lead our team in
                            delivering exceptional coffee experiences. You'll oversee daily operations,
                            ensure top-notch customer service, and foster a welcoming atmosphere.
                            Bring your leadership skills to Botanica and help us create a vibrant
                            community for coffee lovers.
                        </p>
                        <button className="px-8 py-3 bg-black text-white rounded-full">
                            Apply Now
                        </button>
                    </div>
                    <div className="w-full lg:w-5/6 lg:h-[70vh] flex flex-col justify-center items-start gap-8 lg:gap-10 lg:border-t border-gray-500">
                        <h1 className="w-full text-5xl lg:text-6xl ">Coffee Roaster</h1>
                        <p>
                            Embark on a bean-to-cup adventure with us at Botanica Café.
                            As a Coffee Roaster, you'll be at the heart of crafting exceptional
                            flavors, turning green beans into aromatic masterpieces. Join our team
                            and let's roast, brew, and savor the essence of coffee together.
                        </p>
                        <button className="px-8 py-3 bg-black text-white rounded-full">
                            Apply Now
                        </button>
                    </div>
                </div>
                <Footer_v2 />
            </div>
        </section>
    </>
}