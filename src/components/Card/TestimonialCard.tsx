import Image from 'next/image'
import { FaQuoteRight } from 'react-icons/fa6'

export default function TestimonialsCard({
    children,
    customClass,
}: {
    children: React.ReactNode
    customClass: string
}) {
    return (
        <div
            className={`${customClass} bg-white h-fit flex flex-col gap-6 shadow rounded-lg p-4 pb-6`}
        >
            <FaQuoteRight className="text-4xl text-black" />
            {children}
        </div>
    )
}

export function Text({ children }: { children: React.ReactNode }) {
    return <span className="text-base font-medium">{children}</span>
}

export function Profile({
    imgPath,
    altText,
    name,
    job,
}: {
    imgPath: string
    altText: string
    name: string
    job: string
}) {
    return (
        <div className="w-full h-auto flex items-center gap-5">
            <div className="w-[20%] h-auto">
                <Image
                    src={imgPath}
                    alt={altText}
                    width={'0'}
                    height={'0'}
                    className="w-full shadow-md aspect-square rounded-full"
                    quality={100}
                />
            </div>
            <div className="w-9/12 h-auto flex flex-col justify-center">
                <span className="text-black font-semibold text-base 2xl:text-lg">
                    {name}
                </span>
                <span className="text-zinc-700 font-medium text-sm">{job}</span>
            </div>
        </div>
    )
}

TestimonialsCard.Text = Text
TestimonialsCard.Profile = Profile
