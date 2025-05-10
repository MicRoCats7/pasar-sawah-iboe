import * as React from "react"
import { IoIosStar } from "react-icons/io";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

function CardMenu() {
    return (
        <Carousel className="w-full mt-10">
            <CarouselContent className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/4">
                        <div className="p-1">
                            <Card className="border-none shadow-none">
                                <CardContent className="flex flex-col items-start justify-center">
                                    <div className="flex items-center justify-center w-full">
                                        <Image
                                            src="/assets/images-menu/menu1.jpg"
                                            alt="menu1"
                                            width={302}
                                            height={240}
                                            className="w-full rounded-bl-[40px] rounded-tr-[40px]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-start mt-4 gap-4 px-6">
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
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default CardMenu