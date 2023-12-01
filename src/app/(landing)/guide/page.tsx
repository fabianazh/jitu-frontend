import { Metadata } from 'next'
import GuideContainer from '@/components/Container/Landing/GuideContainer'

export const metadata: Metadata = {
    title: 'JItu! Guide',
    description: 'Generated by create next app',
}

export default function GuidePage() {
    return (
        <>
            <GuideContainer />
        </>
    )
}
