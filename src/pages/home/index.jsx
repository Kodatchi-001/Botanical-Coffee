import Footer from "../../components/footer/v1";
import Section1 from "../../components/home/hero";
import Section2 from "../../components/home/from-greenies";
import Section3 from "../../components/home/products";
import Section_4 from "../../components/home/another-menu";
import Section_5 from "../../components/home/not-standard";
import Section_6 from "../../components/home/questions";
import { useEffect } from "react";

export default function Home_Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return <>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
        <Footer />
    </>
}