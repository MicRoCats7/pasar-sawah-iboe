"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-white'>
            <nav className="flex items-center justify-between py-6 text-second max-w-[1320px] md:mx-auto mx-4">
                <h1 className='font-playfair text-main text-3xl font-semibold'>W.M Pasar iboe</h1>
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger>
                            <GiHamburgerMenu size={24} />
                        </SheetTrigger>
                        <SheetContent className="w-full flex items-end">
                            <ul className="space-y-4 mt-[70px] text-end pr-4">
                                <li>
                                    <a
                                        href="#menu"
                                        className="hover:text-gray-400"
                                        onClick={handleLinkClick}
                                    >
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="hover:text-gray-400"
                                        onClick={handleLinkClick}
                                    >
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#article"
                                        className="hover:text-gray-400"
                                        onClick={handleLinkClick}
                                    >
                                        Artikel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="hover:text-gray-400"
                                        onClick={handleLinkClick}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
                <ul className="md:flex items-center space-x-14 hidden">
                    <li>
                        <a href="#menu" className="hover:text-gray-400">
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-gray-400">
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="#article" className="hover:text-gray-400">
                            Artikel
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-400">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="w-1/6 hidden md:block" />
            </nav>
        </div>
    )
}

export default Navbar