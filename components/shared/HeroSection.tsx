import { Button } from '../ui/button'
import { PiArrowDownRightThin } from "react-icons/pi";
import Image from 'next/image';

function HeroSection() {
    const images = [
        {
            src: '/assets/images-hero/Rectangle 1464.png',
            alt: 'Hero Image 1',
        },
        {
            src: '/assets/images-hero/Rectangle 1463.png',
            alt: 'Hero Image 2',
        },
        {
            src: '/assets/images-hero/Rectangle 1462.png',
            alt: 'Hero Image 3',
        },
        {
            src: '/assets/images-hero/Rectangle 1465.png',
            alt: 'Hero Image 4',
        },
        {
            src: '/assets/images-hero/Rectangle 1466.png',
            alt: 'Hero Image 5',
        },
    ]

    return (
        <section className='w-full mt-20 flex flex-col items-center justify-center gap-20'>
            <div className='flex flex-col gap-6 items-center justify-center text-center'>
                <h1 className='font-medium text-second text-6xl font-playfair'>Pemancingan & <br />
                    W.M Pinggir Sawah Iboe
                </h1>
                <p className='font-inter text-second text-xl font-normal'>
                    Makan enak, mancing santai, semua di satu tempat.
                </p>
                <Button
                    variant='main'
                    size='custom'
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