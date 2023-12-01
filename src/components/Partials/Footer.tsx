'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    const pathname = usePathname()
    return (
        <>
            <footer
                id="footer"
                className={`${
                    pathname === '/about' ? '' : 'mt-24'
                } flex relative bottom-0 divide-y-1.5 divide-black/60 bg-gray-100 flex-col px-12`}
            >
                <div className="w-full h-72 py-16 flex">
                    <div className="flex flex-auto flex-col gap-4">
                        <Link href={'/'}>
                            <span className="font-bold text-3xl text-black">
                                Jitu!
                            </span>
                        </Link>
                        <span className="font-medium">
                            Wise choice for effective school regulations
                        </span>
                    </div>
                    <div className="flex flex-col gap-4 flex-auto">
                        <span className="footer__heading">Navigation</span>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'}>
                                    <span className="footer__link">About</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/guide'}>
                                    <span className="footer__link">Guide</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>
                                    <span className="footer__link">
                                        Contact
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 flex-auto">
                        <span className="footer__heading">Company</span>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">
                                        About Us
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">
                                        Careers
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">
                                        Testimonials
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">
                                        Contact
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 flex-auto">
                        <span className="footer__heading">Support</span>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">
                                        Getting Started
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">
                                        How it Works
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">FAQ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 flex-auto">
                        <span className="footer__heading">Legal</span>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">Claims</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">
                                        Privacy
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <span className="footer__link">Terms</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4">
                    <span className="text-sm text-black font-medium">
                        © 2023 Fabianazh. All rights reserved
                    </span>
                    <div className="h-auto flex justify-between w-auto gap-8">
                        <Link
                            href="http://github.com/fabianazh/"
                            className="icon__sm"
                        >
                            <FaGithub />
                        </Link>
                        <Link href="#" className="icon__sm">
                            <FaFacebook />
                        </Link>
                        <Link
                            href="https://instagram.com/fabianazhrr"
                            className="icon__sm"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
