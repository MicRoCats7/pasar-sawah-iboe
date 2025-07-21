import * as React from "react"
import { GoPersonFill } from "react-icons/go";

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { BsCalendar2Fill } from "react-icons/bs";
import { Button } from "../ui/button";
import { SlArrowRight } from "react-icons/sl";
import { PiArrowDownRightThin } from "react-icons/pi";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

function Blog() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="md:pt-32 pt-10 w-full max-w-[1320px] md:mx-auto mx-4" id='article'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-inter font-normal md:text-2xl text-sm text-second opacity-55'>Blog</h3>
                <h2 className='font-playfair font-normal md:text-4xl text-2xl text-second'>Silahkan Baca artikel kami</h2>
            </div>

            <div className="mt-10 w-full">
                <Swiper
                    className="w-full"
                    modules={[Pagination]}
                    spaceBetween={isMobile ? 16 : 20}
                    slidesPerView={isMobile ? 1.2 : 3}
                    centeredSlides={isMobile}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.1,
                            spaceBetween: 16,
                            centeredSlides: false
                        },
                        480: {
                            slidesPerView: 1.3,
                            spaceBetween: 16,
                            centeredSlides: false
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            centeredSlides: false
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                            centeredSlides: false
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            centeredSlides: false
                        }
                    }}
                    style={{
                        "--swiper-pagination-color": "#6D1600",
                        "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "padding": "0 16px"
                    } as React.CSSProperties}
                >
                    {Array.from({ length: 6 }).map((_, index) => (
                        <SwiperSlide key={index} className="pb-12">
                            <Link href={`/article/${index + 1}`} className="block w-full">
                                <Card className="w-full rounded-tr-[96px] shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-4">
                                        <div className="relative overflow-hidden rounded-bl-[80px] rounded-tr-[80px] mb-4">
                                            <Image
                                                src="/assets/images-blog/blog1.jpg"
                                                alt={`Article ${index + 1}`}
                                                width={374}
                                                height={280}
                                                className="w-full h-[200px] md:h-[280px] object-cover transition-transform duration-300 hover:scale-105"
                                                draggable="false"
                                                loading="lazy"
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between text-xs md:text-sm text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <GoPersonFill className="text-[#6D1600]" />
                                                    <span className="font-inter">John Doe</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <BsCalendar2Fill className="text-[#6D1600]" />
                                                    <span className="font-inter">Feb 23, 2024</span>
                                                </div>
                                            </div>

                                            <h3 className="font-plus-jakarta-sans font-semibold text-lg md:text-xl text-second line-clamp-3 leading-tight">
                                                Lorem ipsum dolor sit amet consectetur. Est tempor morbi pellentesque mauris.
                                            </h3>

                                            <div className="flex justify-end pt-2">
                                                <Button
                                                    variant="ghost"
                                                    className="px-0 font-inter font-normal text-sm text-[#6D1600] hover:text-[#8B1F00] transition-colors group"
                                                >
                                                    View details
                                                    <SlArrowRight size={10} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex items-center justify-center my-20">
                <Button
                    variant='main'
                    size='custom'
                    className="w-1/2"
                >
                    Read More
                    <PiArrowDownRightThin size={isMobile ? 20 : 34} />
                </Button>
            </div>
        </section>
    )
}

export default Blog