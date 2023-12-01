import Image from 'next/image'
import BasicInput from '../../Form/BasicInput'
import BasicTextarea from '../../Form/BasicTextarea'
import { LuMail, LuMap, LuPhone } from 'react-icons/lu'

export default function ContactContainer() {
    return (
        <section
            id="contact"
            className="w-full grid grid-cols-2 gap-6 items-center min-h-screen px-12 relative"
        >
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(29,78,216,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className="w-full flex flex-col gap-5">
                <span className="text-black text-5xl font-semibold font-ubuntu">
                    Help <span className="text-blue-700 font-bold">us</span> to
                    improve
                </span>
                <span className="text-zinc-700 font-medium">
                    Your feedback is invaluable in our quest for continuous
                    improvement. We welcome your thoughts, suggestions, and
                    ideas to make Jitu even better. Together, let&apos;s shape
                    the future of education.
                </span>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="rounded-md border border-stone-700 aspect-square grid place-items-center p-3">
                            <LuMail className="text-lg" />
                        </div>
                        <span className="text-zinc-700 font-medium text-sm">
                            jitu.company@email.com
                        </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="rounded-md border border-stone-700 aspect-square grid place-items-center p-3">
                            <LuPhone className="text-lg" />
                        </div>
                        <span className="text-zinc-700 font-medium text-sm">
                            (62) 1326-0216
                        </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="rounded-md border border-stone-700 aspect-square grid place-items-center p-3">
                            <LuMap className="text-lg" />
                        </div>
                        <span className="text-zinc-700 font-medium text-sm">
                            1234 Desert Road, Albuquerque, NM 87101, United
                            States.
                        </span>
                    </div>
                </div>
            </div>
            <form
                action=""
                className="bg-white rounded-xl shadow h-auto p-9 pb-24 w-full flex flex-col gap-5"
            >
                <BasicInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter your name here.."
                    customClass=""
                />
                <BasicInput
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Enter your email here.."
                    customClass=""
                />
                <BasicTextarea
                    label="Message"
                    name="message"
                    placeholder="Enter your message here.."
                    customClass=""
                />
            </form>
        </section>
    )
}
