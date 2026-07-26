const tickerItems = [
    'jasa freelance',
    'joki tugas kuliah',
    'bantu isi quisioner',
    'anter-jemput',
    'cariin kosan',
    'beliin makan',
    'beliin barang',
    'gantiin cod-an',
    'konsul skripsi',
    'suruh fotocopy-in',
    'anterin barang',
    'riset data',
    'escrow aman',
]

export default function LoopItems(){
    const renderItems = () => 
        tickerItems.map((item, index) => (
            <div
                key={index}
                className="
                    shrink-0 whitespace-nowrap rounded-full
                    border border-white/20 px-5 py-2"
            >
                {item}
            </div>
        ))


    return(
        <div className="
                flex py-5 items-center overflow-hidden
                border-y border-white/20 bg-[#0D0F13]/70 "
        >
            <div className="ticker-track flex w-max uppercase text-gray-300 text-sm font-semibold">
                {/* Kelompok pertama */}
                <div className="flex shrink-0 gap-4 pr-4">
                    {renderItems()}
                </div>

                {/* Duplikat agar looping mulus */}
                <div aria-hidden="true" className="flex shrink-0 gap-4 pr-4">
                    {renderItems()}
                </div>
            </div>
        </div>
    ) 
}