import Image from 'next/image'
import ComponentsImage from '@/assets/img/illust/ui-components.png'
import BasicButton from '@/components/Button/BasicButton'

export default function HomeCTAContainer() {
    return (
        <>
            <section className="w-10/12 h-80 mb-0.5 bg-[#fefefe] shadow rounded-xl justify-between p-6 flex mx-auto mt-24">
                <div className="w-8/12 h-full flex-col flex justify-between py-4">
                    <span className="text-3xl block font-bold">
                        Explore the world of education with{' '}
                        <span className="text-blue-700">Jitu!</span> Elevate
                        your learning journey now.
                    </span>
                    <span className="block font-medium">
                        Explore the profound impact of Jitu on school discipline
                        through the perspectives of those who have witnessed its
                        transformative influence. Gain insights into how Jitu
                        has revolutionized educational environments and shaped a
                        positive learning culture
                    </span>
                    <div className="flex gap-5">
                        <BasicButton
                            pathTo="/about"
                            customClass="bg-transparent border border-black hover:bg-stone-50 hover:border-black transition-all duration-200 font-semibold inline-block w-fit text-black shadow text-sm rounded-md px-8 py-3"
                        >
                            <span>Get to Know Us</span>
                        </BasicButton>
                        <BasicButton
                            pathTo="/dashboard"
                            customClass="bg-black/90 font-normal inline-block w-fit text-white text-sm rounded-md px-8 py-3"
                        >
                            <span>Starts now</span>
                        </BasicButton>
                    </div>
                </div>
                <Image
                    src={ComponentsImage}
                    alt="Jitu! UI Components"
                    className="w-fit h-full rounded-xl shadow-sm"
                />
            </section>
        </>
    )
}
