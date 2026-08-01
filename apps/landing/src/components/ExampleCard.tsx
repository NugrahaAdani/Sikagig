export type ExampleItems = {
    type: string
    title: string
    fee: number
    many?: string
}

type ExampleCardProps = ExampleItems & {
    index: number
}

type ContainerCardsProps = {
    items: ExampleItems[]
} 

function ExampleCards({ type, title, fee, many, index }: ExampleCardProps){
    const rotationClass = index % 2 === 0 ? "-rotate-[-0.5deg]" : "rotate-[-0.5deg]"
    
    return(
        <a 
            href="/"
            className={`
                group flex h-full min-h-44 flex-col rounded-2xl
                bg-[#FFE6E6] p-4
                shadow-[4px_5px_0] shadow-black 
                sm:min-h-48 sm:rounded-[1.6rem] sm:p-5 sm:shadow-[7px_7px_0]
                ${rotationClass}
                transition-transform duration-200 hover:-translate-y-1`}
        >
                <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-black/15 px-3 py-1 text-xs font-black uppercase tracking-wide text-black/55">
                        {type}
                    </span>
                    <span className="text-xs font-black text-[#7F55B1]">
                        open
                    </span>
                </div>

                <h3 className="mb-6 mt-7 text-3xl font-extrabold leading-tight text-black sm:mb-7 sm:mt-8 sm:leading-[0.98]">
                    {title}  
                </h3>

                <div className="mt-auto flex flex-col gap-1 border-t border-black/15 pt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
                    <p className="text-xs font-bold text-black/45 sm:text-sm">
                        Budget
                    </p>
                    <p className="text-lg font-black text-black sm:text-xl">
                        Rp {fee.toLocaleString('id-ID')} 
                        {many && ` / ${many}`}
                    </p>
                </div>
        </a>
    )
}

export default function ContainerCards({ items }: ContainerCardsProps ){
    return(
        <div className="mx-auto mt-8 grid max-w-7xl auto-rows-fr gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
                <ExampleCards 
                    key={index}
                    index={index}
                    type={item.type}
                    title={item.title}
                    fee={item.fee}
                    many={item.many}
                />
            ))}
        </div>
        
    )
}
