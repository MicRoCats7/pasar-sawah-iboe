import * as React from "react"
import { IoIosStar } from "react-icons/io";

import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

function CardMenu() {
    return (
        <Swiper
            className="w-full max-w-[1320px] mx-auto mt-10"
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            style={{
                "--swiper-pagination-color": "#6D1600",
                "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                "--swiper-pagination-bullet-inactive-opacity": "1"
            } as React.CSSProperties}
        >
            {Array.from({ length: 20 }).map((_, index) => (
                <SwiperSlide key={index}>
                    <Card className="w-full border-none shadow-none mx-auto pb-10">
                        <CardContent className="p-0 flex flex-col items-center justify-center">
                            <Image
                                src="/assets/images-menu/menu1.jpg"
                                alt="menu1"
                                width={302}
                                height={240}
                                className="rounded-bl-[40px] rounded-tr-[40px] w-full object-cover"
                                draggable="false"
                                loading="lazy"
                            />
                            <div className="flex flex-col items-start justify-start mt-4 gap-4 px-6 pb-6">
                                <h4 className="font-plus-jakarta-sans font-semibold text-xl text-second">Chocolate Latte</h4>
                                <div className="flex items-center gap-2 w-full">
                                    <div className="flex items-center justify-start gap-1">
                                        <IoIosStar size={24} color="#FFB31F" />
                                        <span className="font-inter font-bold text-xl text-second opacity-70">4.9</span>
                                    </div>
                                    <p className="font-inter font-normal text-base text-second opacity-70">(180 reviews)</p>
                                </div>
                                <p className="font-inter font-normal text-base text-second opacity-70">
                                    Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla
                                </p>
                                <span className="font-inter font-bold text-xl text-second opacity-70">
                                    Rp 35.000
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CardMenu