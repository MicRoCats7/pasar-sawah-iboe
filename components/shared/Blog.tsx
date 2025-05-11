import * as React from "react"
import { GoPersonFill } from "react-icons/go";

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { BsCalendar2Fill } from "react-icons/bs";
import { Button } from "../ui/button";
import { SlArrowRight } from "react-icons/sl";
import { PiArrowDownRightThin } from "react-icons/pi";

function Blog() {
    return (
        <section className="pt-32 w-full max-w-[1320px] mx-auto" id='article'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-inter font-normal text-2xl text-second opacity-55'>Blog</h3>
                <h2 className='font-playfair font-normal text-4xl text-second'>Silahkan Baca artikel kami</h2>
            </div>
            <div className="flex items-center justify-center gap-4 mt-10 w-full">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card className="w-full rounded-tr-[96px] shadow-none mx-auto mb-10 p-4" key={index}>
                        <CardContent className="flex flex-col items-center justify-center w-full">
                            <Image
                                src="/assets/images-blog/blog1.jpg"
                                alt="menu1"
                                width={374}
                                height={400}
                                className="rounded-bl-[80px] rounded-tr-[80px] w-full"
                                draggable="false"
                                loading="lazy"
                            />
                            <div className="flex flex-col items-end gap-4">
                                <div className="flex flex-col items-start justify-start mt-4 gap-4 w-full">
                                    <div className="flex items-center justify-between gap-2 w-full">
                                        <div className="flex items-center justify-start gap-2">
                                            <GoPersonFill />
                                            <span className="font-inter font-normal text-sm text-second">John Doe</span>
                                        </div>
                                        <div className="flex items-center justify-start gap-2">
                                            <BsCalendar2Fill />
                                            <span className="font-inter font-normal text-sm text-second">Feb 23, 2024</span>
                                        </div>
                                    </div>
                                    <p
                                        className="font-plus-jakarta-sans font-semibold text-2xl text-second"
                                    >
                                        Lorem ipsum dolor sit amet consectetur. Est tempor morbi pellentesque.
                                    </p>
                                </div>
                                <Button
                                    variant="ghost"
                                    className="px-0 font-inter font-normal text-sm text-second cursor-pointer"
                                >
                                    View details
                                    <SlArrowRight size={10} />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="flex items-center justify-center my-20">
                <Button
                    variant="main"
                    size="custom"
                >
                    Read More
                    <PiArrowDownRightThin size={34} />
                </Button>
            </div>
        </section>
    )
}

export default Blog