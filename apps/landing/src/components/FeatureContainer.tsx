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
    const borderClass =
        index === 0
            ? ''
            : index === 1
                ? 'border-t border-white/10 sm:border-l sm:border-t-0'
                : index === 2
                    ? 'border-t border-white/10 sm:border-l-0 lg:border-l lg:border-t-0'
                    : 'border-t border-white/10 sm:border-l lg:border-t-0'

    return (
        <div
        className={`
            px-5 py-7
            sm:px-6 sm:py-8
            lg:px-8 lg:py-9
            ${borderClass}
        `}
        >
        <h3
            className="
            text-2xl font-black text-white
            sm:text-3xl
            "
        >
            {title}
        </h3>

        <p
            className="
            mt-3 max-w-sm
            text-sm font-semibold leading-relaxed
            text-[#B8A58F]
            sm:mt-4 sm:text-base
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
            mx-4 mt-8 grid grid-cols-1 overflow-hidden
            rounded-3xl border border-white/15
            bg-[#0D0F13]/95
            sm:mx-6 sm:mt-10 sm:grid-cols-2
            lg:mt-12 lg:grid-cols-4 lg:rounded-[42px]"
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
