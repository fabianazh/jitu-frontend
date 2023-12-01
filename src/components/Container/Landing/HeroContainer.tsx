import Image from 'next/image'
import Link from 'next/link'
import BasicButton from '../../Button/BasicButton'

export default function HeroContainer() {
    return (
        <section
            id="hero"
            className="w-full min-h-screen px-12 relative flex items-center justify-center text-center z-10"
        >
            {/* <div className="absolute -z-10 h-full w-full">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            </div> */}
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(29,78,216,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className="w-full max-w-screen-xl px-2.5 md:px-20 py-28 gap-5 flex flex-col items-center justify-center text-center sm:pt-40 ">
                <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
                    Wise choice for effective
                    <span className="block">
                        <span className="text-blue-600">
                            school regulations
                        </span>
                    </span>
                </h1>
                <span className="block max-w-prose text-sm font-medium text-zinc-700 sm:text-lg">
                    Jitu provides intelligent solutions to enhance school
                    discipline. We are here to streamline regulations and offer
                    innovative approaches to handling violations. Join Jitu and
                    be a part of positive change in the education world.
                </span>
                <div className="flex items-center gap-6">
                    <BasicButton
                        pathTo="/login"
                        customClass="bg-black/90 font-normal inline-block w-fit text-white text-sm rounded-md px-8 py-3"
                    >
                        <span>Get Started</span>
                    </BasicButton>
                    <a
                        href="#about"
                        className="bg-transparent border border-blue-600 hover:bg-stone-50 hover:border-black transition-all duration-200 font-semibold inline-block w-fit text-black shadow text-sm rounded-md px-8 py-3"
                    >
                        <span>See a Demo</span>
                    </a>
                </div>

                <div className="mx-auto relative max-w-6xl px-6 lg:px-8">
                    <div className="mt-12 flow-root sm:mt-20">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <Image
                                src="https://res.cloudinary.com/duud9d8dv/image/upload/v1697847276/Screenshot_2023-10-20_at_5.14.05_PM_m5isn8.png"
                                alt="w"
                                width={1364}
                                height={866}
                                quality={100}
                                className="rounded-md bg-white  shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                    {/* <div className="absolute top-36 right-0 -z-10 h-full w-full">
                        <div className="absolute bottom-auto left-auto -right-20 top-0 h-[500px] w-[500px] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
