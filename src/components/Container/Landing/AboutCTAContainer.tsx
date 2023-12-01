import Image from 'next/image'
import TeamGIF from '@/assets/img/illust/urban-group-of-people-brainstorming-around-a-table.gif'
import BasicButton from '@/components/Button/BasicButton'

export default function AboutCTAContainer() {
    return (
        <>
            <section className="w-full h-auto bg-[#fefefe] justify-center flex mt-24 py-7 px-20 shadow">
                <div className="w-4/12 h-full pt-8 grid place-items-center">
                    <Image
                        src={TeamGIF}
                        alt="Welcoming Illustration"
                        className="w-full h-full"
                    />
                </div>
                <div className="w-8/12 h-auto flex-col flex justify-center gap-6 p-8 pl-16 pr-12">
                    <span className="text-3xl block font-bold">
                        Be part of the positive change in education with{' '}
                        <span className="text-blue-700">Jitu!</span>
                    </span>
                    <span className="block font-medium">
                        Join us on a journey to revolutionize education and
                        shape a brighter future. Embrace innovative solutions
                        that enhance school discipline, streamline regulations,
                        and pave the way for positive transformations in the
                        educational landscape.
                    </span>
                    <div className="flex gap-5">
                        <BasicButton
                            pathTo="/guide"
                            customClass="bg-transparent border border-black hover:bg-stone-50 hover:border-black transition-all duration-200 font-semibold inline-block w-fit text-black shadow text-sm rounded-md px-8 py-3"
                        >
                            <span>Learn how it works</span>
                        </BasicButton>
                        <BasicButton
                            pathTo="/dashboard"
                            customClass="bg-black/90 font-normal inline-block w-fit text-white text-sm rounded-md px-8 py-3"
                        >
                            <span>Starts for free</span>
                        </BasicButton>
                    </div>
                </div>
            </section>
        </>
    )
}
