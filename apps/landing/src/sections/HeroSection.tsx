import TypewriterText from '../components/TypewriterText'

type ContohGigProps = {
        title: string,
        gigType: string,
        fee: number,
        person?: 'per orang' 
        rotateClass?: string
    }

function ContohGig( {
            title,
            gigType,
            fee,
            person,
            rotateClass,
            }: ContohGigProps){
                    
    return (
        <div className={`
                flex items-start justify-between bg-white rounded-2xl py-3 px-5 mt-5
                border border-black/15 shadow-[3px_4px_0_#BFC9D1] ${rotateClass}`}>
            <div className="tracking-tight">
                <h2 className="text-lg font-bold  text-black">
                    {title}
                </h2>
                
                <p className="text-gray-600 font-semibold">
                    {gigType}
                </p>
            </div>

            <div className="bg-black font-bold px-4 py-1 rounded-full text-xs">
                <span>
                    Rp {fee.toLocaleString('id-ID')}
                    {person && ` ${person}`}
                </span> 
            </div>
        </div>
    )
}      

export default function HeroSection(){
    const TYPEWRITER_WORDS = [
                            'joki tugas?',
                            'beliin barang?',
                            'nyari tebengan?',
                            'antriin yang viral?',
                            'beliin makan?',
                            'gantiin COD-an?',
                            ]
    

    return (
        <section className="hero-enter min-w-0 pt-0">

            <hr className="mt-4 mx-18 opacity-30"  />

            <p className="mt-10 mx-8 text-left text-sm font-semibold uppercase tracking-widest text-purple-300">
                Cari sika. Ambil gig. Beresin kerjaan.
            </p>

            <div
            className="
                mt-3 grid grid-cols-1 items-start gap-8 px-8
                lg:grid-cols-[54fr_46fr]"
            >
                {/* Bagian kiri */}
                <div className="min-w-0 self-start">
                    <h1 className="
                            text-4xl font-bold leading-[0.9] tracking-[-0.08em]
                            lg:text-8xl"
                    >
                        <span className="block mb-3">
                            Lagi butuh
                        </span>

                        <div className="relative overflow-hidden">
                            {/* Menyediakan ruang sesuai teks terpanjang */}
                            <span
                                aria-hidden="true"
                                className="invisible block text-[#7F55B1]"
                            >
                                antriin yang viral?|
                            </span>

                            <TypewriterText
                                words={TYPEWRITER_WORDS}
                                typingSpeed={80}
                                deletingSpeed={40}
                                pauseDuration={1200}
                                className="absolute inset-0 block text-[#7F55B1]"
                            />
                        </div>
                    </h1>

                        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-gray-200">
                            Posting kerjaanmu, puluhan sika siap ambil dalam hitungan menit. 
                            Bayar lewat escrow — dana baru cair ke sika kalau hasilnya udah kamu setujui. 
                            Aman, cepat, tanpa ribet.
                        </p>

                        <a 
                            href="/"
                            className="
                                mt-8 mr-3 inline-flex items-center justify-center
                                rounded-2xl bg-[#7F55B1] px-10 py-5 
                                font-bold text-white text-lg
                                shadow-[3px_4px_0_#000]
                                transition-all duration-300 ease-out
                                hover:-translate-y-1
                                hover:bg-[#9B7EBD]
                                hover:shadow-[4px_5px_0_#000]
                                active:translate-x-0.75
                                active:translate-y-1
                                active:shadow-none"
                        >
                            Buka Sikagig
                        </a>

                        <div
                            className="
                            mt-8 grid grid-cols-1 items-start gap-2
                            text-[15px] leading-relaxed text-gray-200
                            sm:grid-cols-2 sm:gap-1
                            "
                        >
                            <div className="space-y-4">
                            <p>
                                <strong className="font-black text-white">KYC opsional</strong>
                                {' '}dengan badge verified
                            </p>

                            <p>
                                <strong className="font-black text-white">Langsung mulai</strong>
                                {' '}cari atau posting gig
                            </p>
                            </div>

                            <p>
                            <strong className="font-black text-white">Escrow</strong>
                            {' '}untuk bantu amankan pembayaran
                            </p>
                    </div>

                </div>

                {/* Bagian kanan */}
                <aside className="
                        relative h-fit self-start min-w-0 bg-[#FFE6E6] p-7
                        rounded-3xl shadow-[7px_7px_0] shadow-black">
                    <div className="flex items-start justify-between border-b border-black/20 pb-5">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-600">
                                contoh gig
                            </p>
                            
                            <h2 className="mt-1 text-xl text-black font-semibold tracking-tight ">
                                Yang bisa kamu temuin
                            </h2>
                        </div>
                        
                        <div className="bg-[#7F55B1] rounded-full">
                            <span 
                                className="
                                    shrink-0 rounded-full bg-[#7F55B1]
                                    px-4 py-1.5 text-sm font-bold text-white
                                    shadow-[2.5px_2.5px_0_#333]"
                            >
                                aktif
                            </span>
                        </div>
                    </div>

                    <ContohGig 
                        title="Jokiin tugas statistika"
                        gigType="tugas"
                        fee={10_000}
                    />

                    <ContohGig 
                        title="Isiin quisioner butuh cepet"
                        gigType="riset"
                        fee={2_500}
                        person="per orang"
                        rotateClass="-rotate-1"
                    />

                    <ContohGig 
                        title="Gantiin COD-an depan mahkota"
                        gigType="suruh orang"
                        fee={5_000}
                        rotateClass="rotate-1"
                    />

                    <div className="bg-[#091413] rounded-2xl mt-7 p-5">
                        <h2 className="text-sm font-bold text-white">
                            Detail yang jelas bikin kerjaan lebih gampang selesai.
                        </h2>
                        <p className="text-xs text-gray-400 mt-3">
                            Tulis tugas, budget, deadline, dan bukti yang dibutuhkan dari awal biar sika paham sebelum ambil gig.
                        </p>
                    </div>

                    <div 
                        className="
                            absolute -bottom-6 -left-4 z-20
                            rounded-full bg-yellow-400 py-3 px-5
                            shadow-[4px_6px_0] shadow-black/70"
                    >
                        <p className="whitespace-nowrap font-bold text-sm text-black">
                            Yuk join jadi sika sekarang juga!!!
                        </p>
                    </div>

                </aside>
            </div>
        </section>
    )
}
