import { useState } from "react";
import { Minus, Plus } from "lucide-react"

type FaqProps = {
    title:string
    message: string
}

function FaqContent({ title, message }: FaqProps){
    const [isOpen, setIsOpen] = useState(false)
    
    function HandleClick() {
        setIsOpen((previousValue) => !previousValue)
    }

    return(
        <div className="border-b border-white/20">
            <button
                type="button"
                onClick={HandleClick}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6 sm:py-7"
            >
                <span className="text-xl font-extrabold tracking-[-0.04em] md:text-2xl">
                    {title}
                </span>

                <span
                    aria-hidden="true"
                    className={`
                        relative grid h-9 w-9 shrink-0 place-items-center
                        rounded-full border border-white/15
                        transition-colors duration-300
                        ${
                            isOpen
                                ? "bg-[#A685E2] text-black"
                                : "text-[#A685E2]"
                        }
                    `}
                >
                    <Plus
                        className={`
                            absolute h-5 w-5
                            transition-all duration-300 ease-out
                            ${
                                isOpen
                                    ? "rotate-90 scale-75 opacity-0"
                                    : "rotate-0 scale-100 opacity-100"
                            }
                        `}
                    />

                    <Minus
                        className={`
                            absolute h-5 w-5
                            transition-all duration-300 ease-out
                            ${
                                isOpen
                                    ? "rotate-0 scale-100 opacity-100"
                                    : "-rotate-90 scale-75 opacity-0"
                            }
                        `}
                    />
                </span>
            </button>

            <div
                aria-hidden={!isOpen}
                className={`
                    grid transition-[grid-template-rows,opacity]
                    duration-500 ease-in-out
                    motion-reduce:duration-500
                    ${
                        isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                    }
                `}
            >
                <div className="min-h-0 overflow-hidden">
                    <p
                        className={`
                            pb-7 text-base font-medium leading-7 text-gray-300
                            transition-transform duration-500
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            motion-reduce:duration-500
                            ${isOpen ? "translate-y-0" : "-translate-y-3"}
                        `}
                    >
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Content: FaqProps[] = [
    {
        title:"Sikagig itu buat cari kerja atau cari jasa?",
        message:"Dua-duanya. Juragan bisa posting gig atau order jasa. Jagoan bisa bid gig, claim slot banyak jagoan, atau menawarkan jasa sendiri.",
    },
    {
        title:"KYC wajib?",
        message:"Tidak wajib. User yang KYC akan punya badge verified. Foto KTP dan selfie dipakai untuk proses verifikasi lalu dihapus dari penyimpanan aktif setelah selesai.",
    },
    {
        title:"Kalau kerjaan tidak selesai gimana?",
        message:"Dana ditahan di escrow. Juragan bisa minta revisi, menyetujui hasil, atau mengajukan dispute kalau ada kendala. Admin bisa review bukti dari dua pihak.",
    },
    {
        title:"Penggunanya Khusus warga unsika aja?",
        message:"Yap betul, platform ini dirancang khusus untuk mahasiswa unsika.",
    },
]


export default function Faq(){
    return(
        <section 
            id="faq" 
            className="
                border-t border-amber-400 px-4 py-16 sm:px-6 sm:py-20 
                lg:py-28">
            
            <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
                <div className="order-2 border-t border-white/20 lg:order-1">
                    {Content.map((item, index) => (
                        <FaqContent 
                            key={index}
                            title={item.title}
                            message={item.message}
                        />
                    ))}
                </div>

                {/* Heading — tampil pertama di mobile, kedua di lg */}
                <div className="order-1 lg:order-2 lg:text-right">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#A685E2] sm:text-sm">
                        FAQ
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold leading-[0.94] tracking-[-0.07em] sm:mt-4 md:text-5xl lg:text-7xl">
                        Yang sering ditanyain sebelum mulai.
                    </h2>
                </div>
            </div>
        </section>
    )
}
