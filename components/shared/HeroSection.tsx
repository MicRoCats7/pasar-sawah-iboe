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
        <section className='w-full pt-40 flex flex-col items-center justify-center gap-20 max-w-[1320px] mx-auto'>
            <div className='flex flex-col gap-6 items-center justify-center text-center'>
                <Image
                    src='/assets/judul.svg'
                    alt='judul'
                    width={701}
                    height={154}
                    draggable={false}
                    loading='lazy'
                />
                <p className='font-inter text-second text-xl font-normal'>
                    Makan enak, mancing santai, semua di satu tempat.
                </p>
                <Button
                    variant='main'
                    size='custom'
                    onClick={() => window.scrollTo({ top: document.getElementById('menu')?.offsetTop, behavior: 'smooth' })}
                >
                    MENU KITA
                    <PiArrowDownRightThin size={34} />
                </Button>
            </div>
            <div className='flex gap-4 justify-center mt-10'>
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
        </section>
    )
}

export default HeroSection