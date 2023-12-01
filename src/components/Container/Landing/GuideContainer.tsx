import Image from 'next/image'
import GlobeImage from '@/assets/img/illust/urban-earth.png'
import BasicButton from '@/components/Button/BasicButton'

export default function GuideContainer() {
    return (
        <section
            id="guide"
            className="w-full min-h-screen px-12 mb-16 relative"
        >
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(29,78,216,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

            <div className="w-full h-screen flex flex-col gap-7 justify-center items-center">
                <span className="text-6xl font-semibold font-ubuntu">
                    <span className="text-blue-700 font-bold">How </span>
                    it works?
                </span>
                <span className="font-medium text-lg text-zinc-700">
                    Get Started with an Easy-to-Follow Guide on Jitu!
                </span>
                <BasicButton
                    pathTo="/guide/video"
                    customClass="bg-black/90 font-normal inline-block w-fit text-white text-sm rounded-md px-8 py-3"
                >
                    <span>Watch the video</span>
                </BasicButton>
            </div>
        </section>
    )
}
