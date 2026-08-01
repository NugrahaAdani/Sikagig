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
        <div 
            className="
                flex w-full min-w-0 flex-col gap-4 rounded-2xl border border-white/10
                    bg-[#0D0F13]/90 p-5 sm:flex-row sm:gap-6 sm:rounded-3xl sm:p-7"
        >
            <div className="shrink-0 text-4xl font-extrabold text-[#A685E2] sm:w-20 sm:text-5xl">
                <p>
                    {number} 
                </p>
            </div>

            <div className="min-w-0">
                <h3 className="text-xl font-extrabold leading-snug sm:text-2xl">
                    {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:mt-4 sm:text-base">
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
