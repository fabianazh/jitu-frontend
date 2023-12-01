import Image from 'next/image'
import GlobeImage from '@/assets/img/illust/urban-earth.png'

export default function AboutContainer() {
    return (
        <section
            id="about"
            className="w-full min-h-screen px-12 mb-16 relative"
        >
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(29,78,216,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className="w-full h-screen grid grid-cols-2 gap-6 items-center">
                <div className="w-full h-full grid place-items-center">
                    <Image
                        src={GlobeImage}
                        alt="Globe Image"
                        className="w-8/12 h-fit drop-shadow-xl"
                    />
                </div>
                <div className="flex flex-col gap-7">
                    <span className="text-5xl font-semibold font-ubuntu">
                        We&apos;re the{' '}
                        <span className="text-blue-700 font-bold">#1 EMS</span>
                    </span>
                    <span className="font-medium text-zinc-700">
                        Jitu, a leading educational platform, is dedicated to
                        providing intelligent solutions aimed at enhancing
                        school discipline. Our mission revolves around
                        streamlining regulations and introducing innovative
                        approaches to effectively handle violations within
                        educational institutions. By joining Jitu, you become an
                        integral part of the positive change we aspire to bring
                        to the education world. Together, let&apos;s shape a
                        learning environment that fosters growth, discipline,
                        and success. Embrace the future of education with Jitu!
                    </span>
                    <div className="flex w-full h-auto gap-7">
                        <div className="flex w-1/4 shrink-0 h-auto flex-col gap-1">
                            <span className="text-4xl text-blue-700 font-bold">
                                100M
                            </span>
                            <span className="font-medium text-zinc-700">
                                Users <br />
                                worldwide
                            </span>
                        </div>
                        <div className="flex w-1/4 shrink-0 h-auto flex-col gap-1">
                            <span className="text-4xl text-blue-700 font-bold">
                                100K
                            </span>
                            <span className="font-medium text-zinc-700">
                                College and School use Jitu!
                            </span>
                        </div>
                        <div className="flex w-1/4 shrink-0 h-auto flex-col gap-1">
                            <span className="text-4xl text-blue-700 font-bold">
                                100+
                            </span>
                            <span className="font-medium text-zinc-700">
                                Partners
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
