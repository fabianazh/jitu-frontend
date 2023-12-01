import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            divideWidth: {
                '1.5': '1.5px',
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                ubuntu: ['var(--font-ubuntu)'],
            },
        },
    },
    plugins: [],
}
export default config
