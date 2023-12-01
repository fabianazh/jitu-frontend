import { Poppins, Ubuntu } from 'next/font/google'

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})

export const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-ubuntu',
})
