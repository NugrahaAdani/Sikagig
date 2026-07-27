import type { ReactNode } from 'react'
import { ShieldCheck, UserRoundCheck, BriefcaseBusiness } from 'lucide-react'

type BenefitProps = {
    image?: ReactNode
    title: string
    message: string
}

function BenefitCards({ image, title, message,}: BenefitProps) {
    return (
        <div className="rounded-3xl border border-white/30 bg-black/70 p-5">
            <div className="flex items-start gap-4">
                {image && (
                    <div className="rounded-2xl bg-[#7F55B1]/20 p-3">
                        {image}
                    </div>
                )}

                <div>
                    <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
                        {title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-gray-400">
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
            className="min-w-0 px-6 py-28"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 rounded-[2.2rem] border border-white/20 bg-white/[0.070] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">

                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#A685E2]">
                            Buat yang butuh bantuan
                        </p>
                        <h2 className="
                                mt-4 text-5xl font-extrabold text-gray-200 
                                leading-[0.94] tracking-[-0.07em] md:text-7xl">
                            
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
