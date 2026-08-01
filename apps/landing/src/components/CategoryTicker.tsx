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
                    border border-white/20 px-4 py-1.5
                    sm:px-5 sm:py-2"
            >
                {item}
            </div>
        ))


    return(
        <div className="
                flex items-center overflow-hidden py-4 sm:py-5
                border-y border-white/20 bg-[#0D0F13]/70 "
        >
            <div className="ticker-track flex w-max text-xs font-semibold uppercase text-gray-300 sm:text-sm">
                {/* Kelompok pertama */}
                <div className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4">
                    {renderItems()}
                </div>

                {/* Duplikat agar looping mulus */}
                <div aria-hidden="true" className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4">
                    {renderItems()}
                </div>
            </div>
        </div>
    ) 
}
