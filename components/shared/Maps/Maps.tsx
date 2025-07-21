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
                <h3 className='font-inter font-normal md:text-2xl text-sm text-second opacity-55'>Tentang Kita</h3>
                <h2 className='font-playfair font-normal md:text-4xl text-2xl text-second'>Kunjungi Kami</h2>
            </div>

            <div className="relative w-full max-w-[1320px] h-[450px] md:mt-20 mt-5">
                <ClientLeafletMap />
                <a
                    href="https://www.google.com/maps/place/Pemancingan+dan+W.M+Pinggir+Sawah+Iboe/@-7.1227613,110.7742596,878m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e70a3a583039e23:0x4f2e420954e3147e!8m2!3d-7.1227613!4d110.7742596!16s%2Fg%2F11rhk1yc82?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
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