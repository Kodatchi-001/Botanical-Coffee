import { useEffect, useState } from "react"

export function Scrolle_animation() {
    const [scrolled_navbar, setScrolled_navbar] = useState(false);
    
    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 500) {
            setScrolled_navbar(true);
        }
        else {
            setScrolled_navbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrolled_navbar}
}