import logo from '../assets/logo.png'

export default function Footer(){
    return(
        <section className="border-t border-white/30 px-6 py-10">
            <div className="flex items-center justify-between gap-10">
                <div className="flex">
                    <img
                        src={logo}
                        alt="logo"
                        className="
                            h-12 w-auto object-contain transition-[filter] duration-300
                            hover:drop-shadow-[0_0_1px_rgba(168,85,247,0.9)]"
                    />
                    <p>&copy;<br/>2026</p>

                </div>

                <div>
                    <ul className="flex">
                        <li>
                            Kebijakan Privasi
                        </li>
                        <li>
                            Ketentuan Pengguna
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
