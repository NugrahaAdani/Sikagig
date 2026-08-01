import ContainerCards, { type ExampleItems } from '../components/ExampleCard'

const cards: ExampleItems[] = [
    {
        type:"Banyak sika",
        title:"Isiin kuesioner buat tugas akhir",
        fee: 2_000,
        many: "orang",
    },
    {
        type:"Remote",
        title:"Kerjain tugas StatProb",
        fee: 20_000,
    },
    {
        type:"On-site",
        title:"Gantiin COD-an depan unsika",
        fee: 5_000,
    },
    {
        type:"On-site",
        title:"Beliin gw nasi padang depan slowdown",
        fee: 5_000,
    },
    {
        type:"riset",
        title:"Buatin List ayam geprek enak deket unsika",
        fee: 7_000,
    },
    {
        type:"Remote",
        title:"Like tugas vidio gw di ig",
        fee: 2_000,
        many: "orang",
    },
]

export default function Example(){
    return(
        <section 
            id="example"
            className="min-w-0 px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
                <div className="mx-auto flex max-w-7xl flex-col border-y border-white/30 py-8 sm:py-10">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#A685E2] sm:text-sm sm:tracking-[0.22em]">
                        Contoh gig di Sikagig
                    </p>
                    <h2 className="font-display mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl md:leading-[0.94]">
                        Dari task online sampai bantuan harian.
                    </h2>
                </div>

                <ContainerCards items={cards} />
        </section>
    )
}
