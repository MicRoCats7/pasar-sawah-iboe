"use client";

import { useState, useEffect } from "react";
import * as React from "react"
import { IoIosStar } from "react-icons/io";

import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { CardMenuProps } from "@/types";

function CardMenu({ menuItems }: CardMenuProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <Swiper
            className="w-full max-w-[1320px] md:mx-auto mx-4 mt-10"
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={isMobile ? 2 : 4}
            pagination={{ clickable: true }}
            style={{
                "--swiper-pagination-color": "#6D1600",
                "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                "--swiper-pagination-bullet-inactive-opacity": "1"
            } as React.CSSProperties}
        >
            {menuItems.length > 0 ? (
                menuItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Card className="w-full border-none shadow-none mx-auto pb-10">
                            <CardContent className="p-0 flex flex-col items-center justify-center">
                                <Image
                                    src={item?.image}
                                    alt={item?.name}
                                    width={isMobile ? 159 : 302}
                                    height={isMobile ? 147 : 240}
                                    className="rounded-bl-[40px] rounded-tr-[40px] w-full object-cover md:h-[240px] h-[147px]"
                                    draggable="false"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = "/assets/images-menu/menu1.jpg";
                                    }}
                                />
                                <div className="flex flex-col items-start justify-start mt-4 gap-4 px-6 pb-6 w-full">
                                    <h4 className="font-plus-jakarta-sans font-semibold md:text-xl text-sm text-second">
                                        {item.name}
                                    </h4>
                                    <div className="flex items-center gap-2 w-full">
                                        <div className="flex items-center justify-start gap-1">
                                            <IoIosStar size={isMobile ? 16 : 24} color="#FFB31F" />
                                            <span className="font-inter font-bold md:text-xl text-sm text-second opacity-70">{item.rate || "4.9"}</span>
                                        </div>
                                        <p className="font-inter font-normal md:text-base text-xs text-second opacity-70">{item.total_review || "(180 reviews)"}</p>
                                    </div>
                                    {item.description && (
                                        <p className="font-inter font-normal  md:text-base text-sm text-second opacity-70">
                                            {item.description}
                                        </p>
                                    )}
                                    <span className="font-inter font-bold md:text-xl text-sm text-second opacity-70">
                                        {formatPrice(item.price)}
                                    </span>
                                    {!item.is_available && (
                                        <span className="text-red-500 font-inter font-medium text-sm">
                                            Tidak Tersedia
                                        </span>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))
            ) : (
                <SwiperSlide>
                    <div className="w-full flex items-center justify-center h-[400px]">
                        <p className="font-inter font-normal md:text-lg text-sm text-second opacity-70">
                            Belum ada menu untuk kategori ini
                        </p>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default CardMenu