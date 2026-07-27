export type FeatureItem = {
    title: string
    message: string
}

type FeatureContainerProps = {
    items: FeatureItem[]
}

type FeatProps = FeatureItem & {
    index: number
}

function Feat({ title, message, index }: FeatProps) {
    return (
        <div
        className={`
            px-8 py-10
            lg:px-8 lg:py-9
            ${index === 0
            ? ''
            : 'border-t border-white/10 lg:border-l lg:border-t-0'
            }
        `}
        >
        <h3
            className="
            text-3xl font-black tracking-[-0.06em] text-white
            xl:text-3xl
            "
        >
            {title}
        </h3>

        <p
            className="
            mt-4 max-w-sm
            text-base font-semibold 
            text-[#B8A58F]
            xl:text-sm
            "
        >
            {message}
        </p>
        </div>
    )
}

export default function FeatureContainer({ items }: FeatureContainerProps) {
    return (
        <div
        className="
            mx-6 mt-12 grid grid-cols-1 overflow-hidden
            rounded-[42px] border border-white/15
            bg-[#0D0F13]/95
            lg:grid-cols-4"
        >
        {items.map((item, index) => (
            <Feat
                key={`${item.title}-${index}`}
                index={index}
                title={item.title}
                message={item.message}
            />
        ))}
        </div>
    )
}
