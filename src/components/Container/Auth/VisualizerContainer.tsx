import JituIcon from '@/components/Icon/JItuIcon'
import Image from 'next/image'

export default function VisualizerContainer({
    illustration,
    altText,
}: {
    illustration: string
    altText: string
}) {
    return (
        <section className="flex flex-col justify-between w-4/12 min-h-screen shrink-0 drop-shadow-lg bg-blue-300 p-8">
            <JituIcon />
            <Image src={illustration} alt={altText} />
        </section>
    )
}
