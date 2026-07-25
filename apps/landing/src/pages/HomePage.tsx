import DotField from '../components/DotField';
import Nav from '../components/Nav'
import TypewriterText from '../components/TypewriterText'

type ContohGigProps = {
        title: string,
        gigType: string,
        fee: number,
        person?: 'per orang' 
    }

    function ContohGig( {
                title,
                gigType,
                fee,
                person,
                }: ContohGigProps){
                    
        return (
            <div className="flex items-start justify-between bg-white rounded-2xl p-3 mt-3 border border-black/15">
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

export default function HomePage(){
    const TYPEWRITER_WORDS = [
                            'joki tugas?',
                            'beliin barang?',
                            'nyari tebengan?',
                            'antriin yang viral?',
                            'beliin makan?',
                            'gantiin COD-an?',
                            ]
    
    return (
        <main className="relative isolate min-h-screen">
            
            {/* background fix */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <DotField
                    dotRadius={1.5}
                    dotSpacing={14}
                    bulgeStrength={67}
                    glowRadius={160}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={500}
                    cursorForce={0.1}
                    bulgeOnly
                    gradientFrom="#A855F7"
                    gradientTo="#B497CF"
                    glowColor="#120F17"
                />
            </div>

            <div className="z-10 relative text-white">
                {/* Nav */}
                <Nav />

                {/* <HeroSection /> */}
                <section className="h-150 w-full">
                    <hr className="items-center mt-4 mx-18 opacity-30" />

                    <p className="mt-12 mx-8 text-left text-sm font-semibold uppercase tracking-widest text-purple-300">
                        Cari orang. Ambil gig. Beresin kerjaan.
                    </p>

                    <div
                    className="
                        mt-3 grid grid-cols-1 gap-10 px-8
                        lg:grid-cols-2
                    "
                    >
                        {/* Bagian kiri */}
                        <div className="min-h-full w-fit">
                            <h1 className="
                                    text-4xl font-bold leading-[0.9] tracking-[-0.08em]
                                    lg:text-8xl"
                            >
                                <span className="block mb-3">
                                    Lagi butuh
                                </span>

                                <TypewriterText
                                    words={TYPEWRITER_WORDS}
                                    typingSpeed={80}
                                    deletingSpeed={40}
                                    pauseDuration={1200}
                                    className="block min-h-[1em] text-[#7F55B1]"
                                />
                            </h1>
                        </div>

                        {/* Bagian kanan */}
                        <div className="min-h-full min-w-fit bg-[#FFE6E6] p-7 rounded-3xl">
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
                                            shadow-md shadow-purple-950/20"
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
                            />

                            <ContohGig 
                                title="Gantiin COD-an depan mahkota"
                                gigType="suruh"
                                fee={5_000}
                            />

                        </div>
                    </div>
                    
                </section>


                {/* section lainnya */}
                {/* <Footer /> */}
            </div>

        </main>
    )
}

