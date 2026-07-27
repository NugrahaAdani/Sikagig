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
            className="min-w-0 scroll-mt-24 px-6 py-4"
        >
            <div className="
                    mt-3 grid grid-cols-1 items-start gap-8
                    lg:grid-cols-[40fr_60fr]">

                {/* bagian kiri */}
                <div className="min-w-0 self-start lg:sticky lg:top-36">
                    <h3 className="text-[15px] [word-spacing:0.25rem] tracking-widest text-[#A685E2] font-black uppercase">
                        cara kerjanya
                    </h3>
                    <p className="text-white mt-4 text-7xl font-black tracking-[-0.08em]">
                        Alurnya singkat. Tetap jelas dari awal.
                    </p>
                    <p className="mt-6 text-base text-gray-400 font-medium">
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
