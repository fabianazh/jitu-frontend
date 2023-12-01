'use client'

import Link from 'next/link'
import BasicButton from '../Button/BasicButton'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import JituIcon from '../Icon/JItuIcon'

export default function Header() {
    const pathname = usePathname()
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const scrollYValue = window.scrollY

            if (scrollYValue > 0) {
                controls.start({
                    backgroundColor: 'rgb(255 255 255 / 0.88)',
                    boxShadow:
                        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                    backdropFilter: 'blur(4px)',
                })
            } else {
                controls.start({
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    backdropFilter: 'none',
                })
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [controls])

    return (
        <>
            <motion.header
                initial={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        backdropFilter: 'none',
                    },
                }}
                animate={controls}
                exit={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        backdropFilter: 'none',
                    },
                }}
                transition={{ duration: 0 }}
                className="fixed top-0 right-0 transition-all duration-200 z-[1000] h-auto py-4 flex items-center justify-between w-full px-12"
            >
                <JituIcon />
                <nav className="w-1/3 flex justify-end">
                    <ul className="flex gap-9 text-sm font-semibold">
                        <li>
                            <Link href={'/'}>
                                <span
                                    className={`nav__link ${
                                        pathname === '/' ? 'active' : 'inactive'
                                    } transition-all transform hover:text-black`}
                                >
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'}>
                                <span
                                    className={`nav__link ${
                                        pathname === '/about'
                                            ? 'active'
                                            : 'inactive'
                                    } transition-all transform hover:text-black`}
                                >
                                    About
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/guide'}>
                                <span
                                    className={`nav__link ${
                                        pathname === '/guide'
                                            ? 'active'
                                            : 'inactive'
                                    } transition-all transform hover:text-black`}
                                >
                                    Guide
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>
                                <span
                                    className={`nav__link ${
                                        pathname === '/contact'
                                            ? 'active'
                                            : 'inactive'
                                    } transition-all transform hover:text-black`}
                                >
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-between gap-4">
                    <BasicButton
                        pathTo="/login"
                        customClass="hover:bg-stone-50 hover:border-black border border-blue-700 shadow font-semibold inline-block w-fit text-black text-xs rounded-md px-4 py-2"
                    >
                        <span>Sign In</span>
                    </BasicButton>
                    <BasicButton
                        pathTo="/dashboard"
                        customClass="bg-black/90 hover:bg-black hover:border-blue-700 font-normal inline-block w-fit text-white text-xs border border-black rounded-md px-4 py-2"
                    >
                        <span>Get Started</span>
                    </BasicButton>
                </div>
            </motion.header>
        </>
    )
}
