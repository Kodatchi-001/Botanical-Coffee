import { useEffect, useState } from "react"

export function Scrolle_animation() {
    const [scrolled_navbar, setScrolled_navbar] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        scrollY > 150 ?  setScrolled_navbar(true) : setScrolled_navbar(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrolled_navbar }
}