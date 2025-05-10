import dynamic from 'next/dynamic';
import React from 'react';
import { PiArrowDownRightThin } from 'react-icons/pi';

// Hanya akan dirender di client
const ClientLeafletMap = dynamic(() => import('./ClientLeafletMap'), {
    ssr: false,
});

export default function Maps() {
    return (
        <section className='mt-20 flex flex-col items-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-inter font-normal text-2xl text-second opacity-55'>Tentang Kita</h3>
                <h2 className='font-playfair font-normal text-4xl text-second'>Kunjungi Kami</h2>
            </div>

            <div className="relative w-full max-w-[1320px] h-[450px] mt-20">
                <ClientLeafletMap />
                <a
                    href="https://www.google.com/maps/place/San+Francisco,+CA+94105,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 absolute bottom-5 right-2 bg-[#6D1600] text-white px-8 py-5 rounded-bl-[32px] rounded-tr-[32px] font-inter text-sm tracking-wide shadow-lg hover:bg-[#551100] transition z-10"
                >
                    GOOGLE MAPS
                    <PiArrowDownRightThin size={24} />
                </a>
            </div>
        </section>
    );
}