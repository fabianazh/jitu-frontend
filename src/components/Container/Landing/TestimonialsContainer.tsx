import TestimonialsCard from '@/components/Card/TestimonialCard'
import ElonMuskAvatar from '@/assets/img/avatar/rtx1b282.webp'
import MarkZuckerbergAvatar from '@/assets/img/avatar/Mark-Zuckerberg.jpg'
import MahatmaGandhiAvatar from '@/assets/img/avatar/Mahatma-Gandhi.jpg'
import RickSanchezAvatar from '@/assets/img/avatar/Rick-Sanchez.jpg'
import WalterWhiteAvatar from '@/assets/img/avatar/Walter-White.jpg'
import JohnWickAvatar from '@/assets/img/avatar/John-Wick.jpg'

export default function TestimonialsContainer() {
    return (
        <section
            id="testimonials"
            className="w-full min-h-screen px-24 mb-56 relative"
        >
            <div className="w-full h-auto grid grid-cols-2 gap-5 items-start">
                <div className="w-full h-auto flex flex-col gap-16">
                    <div className="flex flex-col h-fit w-full gap-7">
                        <span className="text-4xl font-semibold text-black">
                            What{' '}
                            <span className="text-blue-700 font-bold">
                                People{' '}
                            </span>
                            say <br />{' '}
                            <span className="text-blue-700 font-bold">
                                About
                            </span>{' '}
                            Us
                        </span>
                        <span className="font-medium">
                            Discover the sentiments of those who have
                            experienced Jitu&apos;s transformative impact on
                            school discipline
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <TestimonialsCard customClass="xl:translate-y-20">
                            <TestimonialsCard.Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rem necessitatibus, eligendi
                                cor itaque odit consequuntur inventore obcaecati
                                dolore reiciendis maiores iure quos, tempora
                                perferendis! Nisi facilis at quis voluptates
                                voluptatum praesentium eos unde aliquid
                                iure.rupti est perspiciatis laudantium
                                repudiandae ipsa
                            </TestimonialsCard.Text>
                            <TestimonialsCard.Profile
                                imgPath={ElonMuskAvatar as unknown as string}
                                altText="Elon Musk Image"
                                name="Elon Musk"
                                job="CEO of Tesla"
                            />
                        </TestimonialsCard>
                        <TestimonialsCard customClass="">
                            <TestimonialsCard.Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rem necessitatibus, eligendi
                                corrupti est perspiciatis laudantium repudiandae
                                ipsa itaque consequuntur inventore obcaecati
                                dolore reiciendis maiores iure quos, tempora
                                perferendis! Nisi facilis at quis voluptates
                                voluptatum praesentium eos unde aliquid iure.
                            </TestimonialsCard.Text>
                            <TestimonialsCard.Profile
                                imgPath={
                                    MarkZuckerbergAvatar as unknown as string
                                }
                                altText="Mark Zuckerberg Image"
                                name="Mark Zuckerberg"
                                job="CEO of Facebook"
                            />
                        </TestimonialsCard>
                    </div>
                </div>
                <div className="w-full h-auto grid grid-cols-2 gap-x-5">
                    <div className="flex flex-col h-auto w-full gap-5">
                        <TestimonialsCard customClass="">
                            <TestimonialsCard.Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rem necessitatibus, eligendi
                                cor itaque odit consequuntur inventore obcaecati
                                dolore reiciendis maiores iure quos, tempora
                                perferendis repudiandae ipsa dolore reiciendis
                                maiores.
                            </TestimonialsCard.Text>
                            <TestimonialsCard.Profile
                                imgPath={
                                    MahatmaGandhiAvatar as unknown as string
                                }
                                altText="Mahatma Gandhi Image"
                                name="Mahatma Gandhi"
                                job="Social Activist"
                            />
                        </TestimonialsCard>
                        <TestimonialsCard customClass="">
                            <TestimonialsCard.Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rem necessitatibus, eligendi
                                corrupti est perspiciatis laudantium repudiandae
                                ipsa itaque consequuntur inventore obcaecati
                                dolore reiciendis maiores iure quos, tempora
                                perferendis! Nisi facilis at quis voluptates
                                voluptatum praesentium eos unde aliquid iure.
                            </TestimonialsCard.Text>
                            <TestimonialsCard.Profile
                                imgPath={RickSanchezAvatar as unknown as string}
                                altText="Rick Sanchez Image"
                                name="Rick Sanchez"
                                job="Scientist"
                            />
                        </TestimonialsCard>
                    </div>
                    <div className="flex flex-col h-auto w-full gap-5 translate-y-20">
                        <TestimonialsCard customClass="">
                            <TestimonialsCard.Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rem necessitatibus, eligendi
                                cor itaque odit consequuntur inventore obcaecati
                                dolore reiciendis maiores iure quos, tempora
                                perferendis! Nisi eos unde aliquid iure.rupti
                                est perspiciatis laudantium repudiandae ipsa
                            </TestimonialsCard.Text>
                            <TestimonialsCard.Profile
                                imgPath={WalterWhiteAvatar as unknown as string}
                                altText="Walter White Image"
                                name="Walter White"
                                job="Chemistry Teacher"
                            />
                        </TestimonialsCard>
                        <TestimonialsCard customClass="">
                            <TestimonialsCard.Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Rem necessitatibus, eligendi
                                corrupti est perspiciatis laudantium repudiandae
                                ipsa itaque consequuntur inventore obcaecati
                                dolore maiores iure quos, tempora! Nisi facilis
                                at quis voluptates voluptatum praesentium eos
                                unde aliquid.
                            </TestimonialsCard.Text>
                            <TestimonialsCard.Profile
                                imgPath={JohnWickAvatar as unknown as string}
                                altText="John Wick Image"
                                name="John Wick"
                                job="The Boogeyman"
                            />
                        </TestimonialsCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
