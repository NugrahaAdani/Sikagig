import type { ReactNode } from 'react'
import { ShieldCheck, UserRoundCheck, BriefcaseBusiness } from 'lucide-react'

type BenefitProps = {
    image?: ReactNode
    title: string
    message: string
}

function BenefitCards({ image, title, message,}: BenefitProps) {
    return (
        <div className="rounded-2xl border border-white/30 bg-black/70 p-4 sm:rounded-3xl sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {image && (
                    <div className="w-fit shrink-0 rounded-2xl bg-[#7F55B1]/20 p-3">
                        {image}
                    </div>
                )}

                <div className="min-w-0">
                    <h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl">
                        {title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-relaxed text-gray-400">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

const benefit: BenefitProps[] = [
    {
        image: <ShieldCheck size={22} color="#9B7EBD" />,
        title:"Pembayaran via escrow",
        message:"Dana tidak langsung diteruskan ke jagoan. Pembayaran ditahan dulu sampai kerjaan selesai dan disetujui.",
    },
    {
        image:<UserRoundCheck size={22} color="#9B7EBD" />,
        title:"Verified badge opsional",
        message:"KYC tidak wajib. User yang memilih verifikasi akan punya badge, dan file KTP/selfie tidak disimpan permanen setelah proses selesai.",
    },
    {
        image:<BriefcaseBusiness size={22} color="#9B7EBD" />,
        title:"Riwayat kerja jelas",
        message:"Chat, bukti kerja, revisi, dan dispute tercatat di app supaya prosesnya lebih mudah dicek kalau ada kendala.",
    },
]


export default function Help(){
    return (
        <section
            id="help"
            className="min-w-0 px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 rounded-3xl border border-white/20 bg-white/[0.070] p-4 sm:p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:rounded-[2.2rem] lg:p-10">

                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#A685E2] sm:text-sm sm:tracking-[0.22em]">
                            Buat yang butuh bantuan
                        </p>
                        <h2 className="
                                mt-4 text-4xl font-extrabold text-gray-200
                                leading-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[0.94]">
                            
                            Cari bantuan tanpa ribet cari orang dulu.
                            
                            <span className="block text-gray-400">
                                Posting, chat, review hasilnya.
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {benefit.map((item, index) => (
                            <BenefitCards
                                key={index}
                                image={item.image}
                                title={item.title}
                                message={item.message}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
