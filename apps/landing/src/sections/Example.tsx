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
            className="min-w-0 px-6 py-28">
                <div className="flex flex-col py-10 border-y border-white/30">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#A685E2]">
                        Contoh gig di Sikagig
                    </p>
                    <h2 className="font-display mt-4 max-w-3xl text-5xl font-extrabold leading-[0.94] tracking-[-0.07em] md:text-7xl">
                        Dari task online sampai bantuan harian.
                    </h2>
                </div>

                <ContainerCards items={cards} />
        </section>
    )
}