export type CardProps = {
    number: string
    title: string
    message: string
}

type CardContainerProps = {
    items: CardProps[]
}

function Card({ number, title, message }: CardProps){
    return(
        <div className="flex w-full min-w-0 rounded-3xl border border-white/10 bg-[#0D0F13]/90 p-7">
            <div className="ml-3 mr-20 text-5xl font-extrabold text-[#A685E2] tracking-[-0.08em]">
                <p>
                    {number} 
                </p>
            </div>

            <div className="min-w-0">
                <h3 className="text-2xl font-extrabold">
                    {title}
                </h3>
                <p className="mt-4 mb-3 text-gray-300">
                    {message}
                </p>
            </div>
        </div>
    )
}


export default function CardsContainer({ items }: CardContainerProps){
    return(
        <div className="flex min-w-0 flex-col gap-4">
            {items.map(( item ) => (
                <Card 
                    key={item.number}
                    number={item.number}
                    title={item.title}
                    message={item.message}
                />
            ))}
        </div>
    )
}