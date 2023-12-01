import BenefitCard from '@/components/Card/BenefitCard'
import MarkPresentationImage from '@/assets/img/illust/mark-zuck-presentation.jpg'
import ElonPresentationImage from '@/assets/img/illust/Elon-scaled.webp'
import JituDashboardImage from '@/assets/img/illust/original-e6663b80dfd9e7fdc33764c1975cd5f5.png'

export default function BenefitContainer() {
    return (
        <section className="w-11/12 mx-auto flex-col items-center gap-9 flex h-auto">
            <span className="text-4xl font-bold text-blue-700 font-ubuntu">
                Why <span className="text-black font-semibold">choose us?</span>
            </span>
            <div className="grid grid-rows-3 gap-7 w-10/12 h-auto">
                <BenefitCard>
                    <BenefitCard.Video
                        imgPath={MarkPresentationImage as unknown as string}
                        altText="Mark Zuckeberg explaining Jitu! Features"
                    />
                    <BenefitCard.Description>
                        <span className="text-black text-xl font-semibold">
                            Safely and{' '}
                            <span className="text-blue-700">
                                Securely Manage{' '}
                            </span>
                            Student Information
                        </span>
                        <span className="text-zinc-700 font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Est placeat culpa sapiente ad mollitia eum
                            aperiam sed veritatis voluptas voluptate quam
                            molestias qui voluptates aspernatur, non alias ipsum
                            incidunt doloremque harum minus iste.
                        </span>
                    </BenefitCard.Description>
                </BenefitCard>
                <BenefitCard>
                    <BenefitCard.Description>
                        <span className="text-black text-xl font-semibold">
                            Optimal{' '}
                            <span className="text-blue-700">
                                Responsive Screen
                            </span>{' '}
                            Display Solution
                        </span>
                        <span className="text-zinc-700 font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Est placeat culpa sapiente quam molestias qui
                            voluptates aspernatur, non alias voluptate quam
                            molestias qui voluptates ipsum incidunt doloremque
                            fugit esse harum minus iste.
                        </span>
                    </BenefitCard.Description>
                    <BenefitCard.Video
                        imgPath={ElonPresentationImage as unknown as string}
                        altText="Elon Musk explaining Jitu! Features"
                    />
                </BenefitCard>
                <BenefitCard>
                    <BenefitCard.Video
                        imgPath={JituDashboardImage as unknown as string}
                        altText="Jitu! Features"
                    />
                    <BenefitCard.Description>
                        <span className="text-black text-xl font-semibold">
                            Experience{' '}
                            <span className="text-blue-700">
                                Seamlessly Import{' '}
                            </span>
                            Student Information
                        </span>
                        <span className="text-zinc-700 font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Est placeat culpa sapiente ad mollitia eum
                            aperiam sed veritatis voluptas voluptate quam
                            molestias qui voluptates aspernatur, non alias ipsum
                            incidunt doloremque fugit esse harum minus iste.
                            Inventore, labore fuga!
                        </span>
                    </BenefitCard.Description>
                </BenefitCard>
            </div>
        </section>
    )
}
