import WorkCards, { type CardProps} from '../components/WorkCards'

const cards: CardProps[] = [
    {
        number: "01",
        title: "Posting kebutuhan",
        message:"Jelaskan tugasnya, lokasi atau online, budget, deadline, dan bukti yang perlu dikirim setelah selesai.",
    },
    {
        number: "02",
        title: "Sika ambil atau bid",
        message:"Untuk gig single, sika bisa kirim bid. Untuk gig banyak sika, slot bisa diklaim sesuai kuota yang kamu buka.",
    },
    {
        number: "03",
        title: "Kerjaan dikirim pakai bukti",
        message:"Bukti bisa catatan, link, screenshot, atau file. Juragan review dari halaman yang sama.",
    },
    {
        number: "04",
        title: "Dana cair setelah aman",
        message:"Dana diproses setelah hasil disetujui. Kalau ada kendala, dispute membantu admin melihat kronologi dan bukti dari dua pihak.",
    },
]


export default function HowItWorks(){
    return(
        <section 
            id="how-it-works" 
            className="min-w-0 scroll-mt-16 px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        >
            <div className="
                    mx-auto grid max-w-7xl grid-cols-1 items-start gap-8
                    lg:grid-cols-[40fr_60fr] lg:gap-10">

                {/* bagian kiri */}
                <div className="min-w-0 self-start lg:sticky lg:top-36">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#A685E2] sm:text-[15px] sm:[word-spacing:0.25rem]">
                        cara kerjanya
                    </h3>
                    <p className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-none">
                        Alurnya singkat. Tetap jelas dari awal.
                    </p>
                    <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-gray-400 sm:mt-6 sm:text-base">
                        Posting kebutuhan, pilih sika, review bukti, lalu selesaikan pembayaran.
                        Semua langkah dibuat supaya juragan dan sika sama-sama tahu langkah berikutnya.
                    </p>
                </div>

                {/* bagian kanan */}
                <WorkCards items={cards} />

            </div>
        </section>
    )
}
