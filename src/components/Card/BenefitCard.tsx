import Image from 'next/image'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import BasicButton from '../Button/BasicButton'

export default function BenefitCard({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="w-full h-auto flex gap-4">{children}</div>
}

export function Video({
    imgPath,
    altText,
}: {
    imgPath: string
    altText: string
}) {
    return (
        <div className="shadow relative h-60 aspect-square overflow-hidden rounded-xl w-1/3 bg-[#fefefe] p-5 grid place-items-center">
            <Image
                src={imgPath}
                alt={altText}
                width={'0'}
                height={'0'}
                draggable={false}
                className="w-fit rounded-lg blur-[0.5px] brightness-[.7] h-full aspect-video"
            />
            <BsFillPlayCircleFill className="absolute text-5xl z-10 text-white cursor-pointer" />
        </div>
    )
}

export function Description({ children }: { children: React.ReactNode }) {
    return (
        <div className="shadow h-60 rounded-xl w-2/3 bg-[#fefefe] px-6 py-5 flex flex-col gap-3">
            {children}
            <div className="w-full flex gap-4 mt-2">
                <BasicButton
                    pathTo="/login"
                    customClass="bg-transparent border border-blue-600 hover:bg-stone-50 hover:border-black transition-all duration-200 font-semibold inline-block w-fit text-black shadow text-sm rounded-md px-5 py-2"
                >
                    <span>Learn More</span>
                </BasicButton>
                <a
                    href="#about"
                    className="bg-black/90 font-normal inline-block w-fit text-white text-sm rounded-md px-5 py-2"
                >
                    <span>Try Now</span>
                </a>
            </div>
        </div>
    )
}

BenefitCard.Video = Video
BenefitCard.Description = Description
