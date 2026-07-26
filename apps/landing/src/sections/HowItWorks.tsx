
export default function HowItWorks(){
    return(
        <section 
            id="how-it-works" 
            className="min-w-0 scroll-mt-24 py-4"
        >
            <div className="
                    mt-3 grid grid-cols-1 items-start gap-8 px-8 
                    lg:grid-cols-[40fr_60fr]">

                {/* bagian kiri */}
                <div className="min-w-0 self-start lg:sticky lg:top-32">
                    <h3 className="text-[15px] [word-spacing:0.25rem] tracking-widest text-[#7F55B1] font-black uppercase">
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
                <div className="flex min-w-0 flex-col gap-4">
                    <div className="flex h-fit self-start min-w-0 bg-[#0D0F13]/90 border border-white/10 p-7 rounded-3xl">
                        <div className="ml-3 mr-20 text-5xl font-extrabold text-[#7F55B1] tracking-[-0.08em]">
                            <p>
                                01 
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Posting kebutuhan
                            </h3>
                            <p className="mt-4 mb-3 text-gray-300">
                                Jelaskan tugasnya, lokasi atau online, budget, deadline, dan bukti yang perlu dikirim setelah selesai.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex h-fit self-start min-w-0 bg-[#0D0F13]/90 border border-white/10 p-7 rounded-3xl">
                        <div className="ml-3 mr-20 text-5xl font-extrabold text-[#7F55B1] tracking-[-0.08em]">
                            <p>
                                02
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Sika ambil atau bid
                            </h3>
                            <p className="mt-4 mb-3 text-gray-300">
                                Untuk gig single, sika bisa kirim bid. Untuk gig banyak sika, slot bisa diklaim sesuai kuota yang kamu buka.
                            </p>
                        </div>
                    </div>

                    <div className="flex h-fit self-start min-w-0 bg-[#0D0F13]/90 border border-white/10 p-7 rounded-3xl">
                        <div className="ml-3 mr-20 text-5xl font-extrabold text-[#7F55B1] tracking-[-0.08em]">
                            <p>
                                03
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">
                                Kerjaan dikirim pakai bukti
                            </h3>
                            <p className="mt-4 mb-3 text-gray-300">
                                Bukti bisa catatan, link, screenshot, atau file. Juragan review dari halaman yang sama.
                            </p>
                        </div>
                    </div>

                    <div className="flex h-fit self-start min-w-0 bg-[#0D0F13]/90 border border-white/10 p-7 rounded-3xl">
                        <div className="ml-3 mr-20 text-5xl font-extrabold text-[#7F55B1] tracking-[-0.08em]">
                            <p>
                                04
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold">          
                                Dana cair setelah aman
                            </h3>
                            <p className="mt-4 mb-3 text-gray-300">
                                Dana diproses setelah hasil disetujui. Kalau ada kendala, dispute membantu admin melihat kronologi dan bukti dari dua pihak.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}