import HeroContainer from '@/components/Container/Landing/HeroContainer'
import ClientContainer from '@/components/Container/Landing/ClientsContainer'
import HomeCTAContainer from '@/components/Container/Landing/HomeCTAContainer'
import BenefitContainer from '@/components/Container/Landing/BenefitContainer'

export default function HomePage() {
    return (
        <>
            <HeroContainer />
            <BenefitContainer />
            <ClientContainer />
            <HomeCTAContainer />
        </>
    )
}
