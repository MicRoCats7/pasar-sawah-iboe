import { Button } from '../ui/button'
import { PiArrowDownRightThin } from "react-icons/pi";
import Image from 'next/image';

function HeroSection() {
    const images = [
        {
            src: '/assets/images-hero/image1.svg',
            alt: 'Hero Image 1',
        },
        {
            src: '/assets/images-hero/image2.svg',
            alt: 'Hero Image 2',
        },
        {
            src: '/assets/images-hero/image3.svg',
            alt: 'Hero Image 3',
        },
        {
            src: '/assets/images-hero/image4.svg',
            alt: 'Hero Image 4',
        },
        {
            src: '/assets/images-hero/image5.svg',
            alt: 'Hero Image 5',
        },
        {
            src: '/assets/images-hero/image6.svg',
            alt: 'Hero Image 6',
        }
    ]

    return (
        <section className='w-full md:pt-40 pt-32 flex flex-col items-center justify-center md:gap-20 gap-10 max-w-[1320px] mx-auto'>
            <div className='flex flex-col md:gap-6 gap-4 items-center justify-center text-center'>
                <Image
                    src='/assets/judul.svg'
                    alt='judul'
                    width={701}
                    height={154}
                    draggable={false}
                    loading='lazy'
                    className='w-[80%] md:w-[50%] lg:w-full'
                />
                <p className='font-inter text-second md:text-xl text-sm font-normal'>
                    Makan enak, mancing santai, semua di satu tempat.
                </p>
                <Button
                    variant='main'
                    size='custom'
                    onClick={() => window.scrollTo({ top: document.getElementById('menu')?.offsetTop, behavior: 'smooth' })}
                >
                    MENU KITA
                    <PiArrowDownRightThin className="md:size-[34px] size-[20px]" />
                </Button>
            </div>
            <div className="flex gap-4 justify-center w-full ">
                <div className="hidden md:flex gap-4 w-full justify-center">
                    {images.map((image, index) => (
                        <div key={index}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={244}
                                height={380}
                                draggable={false}
                                loading='lazy'
                            />
                        </div>
                    ))}
                </div>
                <div className="flex md:hidden gap-4 w-full justify-center mx-4">
                    {[images[0], images[2], images[1], images[5]].map((image, index) => (
                        <div key={index}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={244}
                                height={380}
                                draggable={false}
                                loading='lazy'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroSection