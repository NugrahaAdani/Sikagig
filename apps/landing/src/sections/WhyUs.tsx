type WhyProps = {
    title:string
    message: string
}

function WhyContent({ title, message }: WhyProps){
    return(
        <div className="grid gap-2 py-5 sm:py-6 md:grid-cols-[14rem_1fr] md:gap-3 md:py-7">
            <h3 className="text-xl font-extrabold tracking-[-0.04em] md:text-2xl">
                {title}
            </h3>
            <p className="text-sm font-medium leading-7 text-gray-300 md:text-base">
                {message}
            </p>
        </div>
    )
}

const Content: WhyProps[] = [
    {
        title:"Online dan on-site",
        message:"Posting gig remote, kerja fisik ringan, atau bantuan lokal sesuai kebutuhanmu.",
    },
    {
        title:"Satu orang atau banyak",
        message:"Butuh satu orang? Bisa. Butuh banyak jagoan untuk task yang sama? Pakai slot sesuai kuota.",
    },
    {
        title:"Bisa order jasa",
        message:"Sika bisa menawarkan jasa. Juragan bisa minta penawaran, sepakati scope, lalu bayar setelah jelas.",
    },
    {
        title:"Ada bantuan admin",
        message:"Kalau ada kendala, dispute membantu admin mengecek bukti dan mengambil keputusan yang adil.",
    },
]

export default function WhyUs(){
    return(
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#A685E2] sm:text-sm">
                            kenapa harus sikagig?
                        </p>
                        <h2 className="mt-3 text-4xl font-extrabold leading-[0.94] tracking-[-0.07em] text-gray-200 sm:mt-4 md:text-5xl lg:text-7xl">
                            Satu tempat buat posting gig, ambil kerjaan, dan order jasa.
                        </h2>
                    </div>

                    <div className="divide-y divide-white/20 border-y border-white/20">
                        {Content.map((item, index) => (
                            <WhyContent 
                                key={index}
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