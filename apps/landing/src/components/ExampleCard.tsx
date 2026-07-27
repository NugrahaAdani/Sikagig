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
    const rotationClass = index % 2 === 0 ? "md:-rotate-[-0.5deg]" : "md:rotate-[-0.5deg]"
    
    return(
        <a 
            href="/"
            className={`
                group flex h-full min-h-48 flex-col rounded-[1.6rem]
                bg-[#FFE6E6] p-5
                shadow-[7px_7px_0] shadow-black 
                ${rotationClass}
                transition-transform duration-200 hover:-translate-y-1`}
        >
                <div className="flex items-center justify-between gap-3">
                    <span className="border border-black/15 rounded-full px-3 py-1 text-black/55 uppercase text-xs font-black tracking-wide ">
                        {type}
                    </span>
                    <span className="text-xs font-black text-[#7F55B1]">
                        open
                    </span>
                </div>

                <h3 className="font-extrabold text-black mt-8 mb-7 text-3xl leading-[0.98] tracking-[-0.06em]">
                    {title}  
                </h3>

                <div className="mt-auto flex items-end justify-between border-t border-black/15 pt-4">
                    <p className="text-sm font-bold text-black/45">
                        Budget
                    </p>
                    <p className="text-xl text-black font-black ">
                        Rp {fee.toLocaleString('id-ID')} 
                        {many && ` / ${many}`}
                    </p>
                </div>
        </a>
    )
}

export default function ContainerCards({ items }: ContainerCardsProps ){
    return(
        <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
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