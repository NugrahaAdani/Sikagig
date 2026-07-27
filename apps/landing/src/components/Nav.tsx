import { useEffect, useState } from 'react';
import { Link } from 'react-router'
import logo from '../assets/logo.png';

export default function Nav(){
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 15)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`
            navbar-enter sticky top-0 z-50
            transition-colors duration-100 
            ${
                isScrolled
                    ? "bg-[#120F17]/80 shadow-lg shadow-black/20 backdrop-blur-md"
                    : "bg-transparent"
            }`}>
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 pt-4"
                aria-label="Navigasi utama"
            >
                <a 
                    href="/" 
                    className="inline-flex shrink-0 items-center"
                    aria-label="kembali ke homepage"
                >
                    <img 
                        src={logo} 
                        alt="logo"
                        className="
                            h-16 w-auto object-contain transition-[filter] duration-300
                            hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.9)]"
                    />
                </a>

                <ul className="flex items-center gap-8">
                    <li>
                        <a href="#how-it-works" className="hover:text-purple-300">
                            Cara Kerja
                        </a>
                    </li>

                    <li>
                        <a href="#example" className="hover:text-purple-300">
                            Contoh Gig
                        </a>
                    </li>

                    <li>
                        <a href="#help" className="hover:text-purple-300">
                            Butuh bantuan?
                        </a>
                    </li>

                    <li>
                        <a href="#faq" className="hover:text-purple-300">
                            FAQ
                        </a>
                    </li>
                </ul>

                <Link
                    to="/"
                    className="
                        mr-3 rounded-2xl bg-[#7F55B1] px-5 py-2 font-bold
                        shadow-[3px_4px_0] shadow-black transition-[transform,background-color,box-shadow] duration-300 ease-out
                        hover:bg-[#9B7EBD] hover:shadow-black hover:-translate-y-0.5"
                >
                    Buka App
                </Link>
            </nav>
        </header>
    )
}
