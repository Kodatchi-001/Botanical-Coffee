import { useState } from 'react';

export function Navbar_v2 () {
    const [valide, setvalide] = useState(false);
    const Navbar_v2 = _ => setvalide(!valide)

    return [valide,Navbar_v2]
}