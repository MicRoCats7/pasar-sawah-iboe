import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <section className='bg-second'>
            <div className='max-w-[1320px] mx-auto py-20 flex items-start gap-20'>
                <div className='flex flex-col items-start gap-8 w-[38%]'>
                    <div className='flex items-center gap-6'>
                        <Image
                            src="/assets/Logo_white_footer.svg"
                            alt="logo"
                            width={58}
                            height={58}
                        />
                        <h3 className='font-inter font-semibold text-5xl text-white'>W.M Pasar iboe</h3>
                    </div>
                    <p className='font-inter font-normal text-xl text-white'>
                        Temukan ketenangan di tepi sawah, nikmati hidangan hangat dalam suasana yang damai dan alami.
                    </p>
                    <div className='flex items-center gap-2'>
                        <FaWhatsapp size={24} color='#fff' />
                        <span className='font-inter font-normal text-xl text-white'>+62 859-4695-3206</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-playfair text-white text-[28px] font-normal'>Quick Links</h1>
                    <ul className='mt-6 flex flex-col gap-4'>
                        <li className='font-inter font-normal text-base text-white'>Menu</li>
                        <li className='font-inter font-normal text-base text-white'>Tentang Kami</li>
                        <li className='font-inter font-normal text-base text-white'>Artikel</li>
                        <li className='font-inter font-normal text-base text-white'>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-playfair text-white text-[28px] font-normal'>Resources</h1>
                    <ul className='mt-6 flex flex-col gap-4'>
                        <li className='font-inter font-normal text-base text-white'>Support</li>
                        <li className='font-inter font-normal text-base text-white'>Privacy Policy</li>
                        <li className='font-inter font-normal text-base text-white'>Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-playfair text-white text-[28px] font-normal'>Social Media</h1>
                    <div className='mt-6 flex items-center gap-2'>
                        <div className='py-3 px-4 bg-[#FFFFFF14]'>
                            <FaFacebookF color='#ffff' />
                        </div>
                        <div className='py-3 px-4 bg-[#FFFFFF14]'>
                            <FaTwitter color='#ffff' />
                        </div>
                        <div className='py-3 px-4 bg-[#FFFFFF14]'>
                            <FaInstagram color='#ffff' />
                        </div>
                        <div className='py-3 px-4 bg-[#FFFFFF14]'>
                            <FaTiktok color='#ffff' />
                        </div>
                        <div className='py-3 px-4 bg-[#FFFFFF14]'>
                            <FaYoutube color='#ffff' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer