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

                <div className="flex gap-4">
                        <a
                            href="/terms"
                            className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs text-white/60 transition-colors hover:text-white/80"
                        >
                            Kebijakan Privasi
                        </a>

                        <a
                            href="/privacy"
                            className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs text-white/60 transition-colors hover:text-white/80"
                        >
                            Ketentuan Pengguna
                        </a>

                        <a
                            href="https://instagram.com/nugrahaadanii"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-full border border-[#7F55B1] bg-[#7F55B1]/20 px-3 py-2 text-xs text-purple-400 transition-colors hover:bg-[#7F55B1]/60"
                        >
                            <i className="fa-brands fa-instagram"></i>
                            <p>Instagram</p>
                        </a>
                </div>
            </div>
        </section>
    )
}
