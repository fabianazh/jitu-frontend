import Image from 'next/image'
import HarvardIcon from '@/assets/img/icon/harvard.png'
import OxfordIcon from '@/assets/img/icon/oxford.png'
import MITIcon from '@/assets/img/icon/mit.png'
import UGMIcon from '@/assets/img/icon/ugm.png'
import PasimIcon from '@/assets/img/icon/smk-pasim.png'
import UnibrawIcon from '@/assets/img/icon/unibraw.png'
import UCIcon from '@/assets/img/icon/uc.png'

export default function ClientsContainer() {
    return (
        <section
            id="client"
            className="w-full items-center mt-24 flex flex-col gap-4 h-auto px-8 mx-auto relative"
        >
            <span className="block text-base font-semibold">
                Trusted by more than{' '}
                <span className="text-blue-700">100.000+</span> School and
                College accros the globe
            </span>
            <div className="h-auto p-0 w-10/12 gap-x-20 flex items-center justify-center flex-wrap">
                <Image
                    src={HarvardIcon}
                    alt="Harvard Icon"
                    className="h-12 w-fit grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
                ></Image>
                <Image
                    src={OxfordIcon}
                    alt="Oxford Icon"
                    className="h-12 w-fit grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
                ></Image>
                <Image
                    src={MITIcon}
                    alt="MIT Icon"
                    className="h-24 w-fit grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
                ></Image>
                <Image
                    src={OxfordIcon}
                    alt="Oxford Icon"
                    className="h-12 w-fit grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
                ></Image>
                {/* <Image
                    src={UCIcon}
                    alt="UC Icon"
                    className="h-16 w-fit grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
                ></Image> */}
                <Image
                    src={UGMIcon}
                    alt="UGM Icon"
                    className="h-20 w-fit grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
                ></Image>
                <Image
                    src={UnibrawIcon}
                    alt="Unibraw Icon"
                    className="h-12 w-fit grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
                ></Image>
                <Image
                    src={PasimIcon}
                    alt="Pasim Icon"
                    className="h-16 w-fit grayscale hover:grayscale-0 transition-all duration-200 cursor-pointer"
                ></Image>
            </div>
        </section>
    )
}
