"use client";

import Navbar from '@/components/shared/Navbar'
import React from 'react'
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Footer from '@/components/shared/Footer';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

function DetailArtikel() {
    const router = useRouter();

    return (
        <main>
            <Navbar />
            <div className='mt-28 max-w-[1320px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <MoveLeft
                        color='#6D1600'
                        size={40}
                        onClick={() => router.push("/")}
                    />
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='text-second font-normal font-playfair text-4xl'>Nikmati Hidangan Lezat di Tengah Alam</h1>
                        <h3 className='font-normal font-inter text-2xl text-second opacity-55'>Tentang Kami</h3>
                    </div>
                    <div></div>
                </div>
                <div className='w-1/2 mx-auto'>
                    <Image
                        src='/assets/images-blog/blog1.jpg'
                        alt='Detail Artikel'
                        width={737}
                        height={292}
                        className='w-full h-auto object-cover mt-6 rounded-bl-[120px] rounded-tr-[120px]'
                    />
                </div>
                <p className='font-inter font-normal text-lg text-second text-justify mt-14'>
                    Di sudut tenang sebuah desa yang berada di tepi danau atau aliran sungai jernih, kehidupan berjalan dengan ritme yang berbeda dari hiruk-pikuk kota. Di sini, waktu terasa lebih lambat namun lebih bermakna. Saat matahari baru menyembul di balik perbukitan, para nelayan desa sudah mulai menyiapkan kail, jaring, dan perahu kayu mereka. Pemancingan bukan sekadar kegiatan ekonomi, tapi juga bagian dari gaya hidup yang erat dengan alam.
                    Tradisi memancing di desa sering kali diwariskan turun-temurun. Anak-anak kecil belajar cara mengikat umpan dari ayah atau kakeknya, sambil mendengarkan kisah tentang ‘ikan besar’ yang nyaris tak tertangkap di masa lalu. Setiap orang punya spot favorit di tepi sungai atau danau. Bagi mereka, memancing bukan hanya untuk mendapatkan ikan, tapi juga untuk menenangkan hati, berkontemplasi, dan kadang… hanya untuk menikmati suara alam.

                    Hasil tangkapan hari itu—baik itu ikan nila, mujair, lele, atau bahkan udang sungai—selalu menjadi kebanggaan tersendiri. Ikan-ikan segar langsung dibawa pulang, dibersihkan bersama-sama, lalu diolah menjadi berbagai hidangan khas desa. Salah satu yang paling populer adalah ikan bakar daun pisang, yang dimasak perlahan di atas bara arang, menghasilkan aroma harum yang menggoda. Ada juga pepes ikan, dibungkus daun dan dikukus dengan bumbu rempah-rempah tradisional seperti kemangi, kunyit, dan serai.
                    Selain itu, ada sajian yang hanya ditemukan di desa tertentu—misalnya sup kepala ikan dengan daun ruku-ruku di daerah Sumatera, atau ikan kuah kuning khas Maluku yang kaya rasa namun sederhana bahan. Semua makanan ini dimasak dengan cara tradisional: menggunakan kayu bakar, alat masak tanah liat, dan tangan-tangan yang penuh pengalaman. Rasanya? Tak tergantikan oleh masakan restoran modern mana pun.

                    Makanan hasil pemancingan ini biasanya disantap bersama di saung, halaman rumah, atau bale bambu yang menghadap sawah atau danau. Momen makan bersama jadi lebih dari sekadar mengisi perut—itu adalah perayaan kecil akan hasil kerja keras, dan bentuk syukur atas rezeki dari alam. Obrolan ringan, tawa anak-anak, dan secangkir teh hangat melengkapi suasana yang sulit ditemukan di tempat lain.
                    Di desa, hubungan antara manusia dan alam bukan sekadar konsep—ia adalah kenyataan hidup yang dijalani setiap hari. Melalui aktivitas sederhana seperti memancing dan memasak bersama, masyarakat desa menunjukkan bahwa kebahagiaan sejati bisa ditemukan dalam hal-hal kecil. Dari danau ke dapur, dari kail ke piring—semuanya dirangkai dalam harmoni yang menyentuh hati.
                </p>
                <Button
                    variant='main'
                    size='custom'
                    className="w-1/3 text-2xl font-playfair-sc mt-36 mb-16"
                    onClick={() => router.push("/")}
                >
                    Kembali ke beranda
                    <BsArrowLeft size={34} />
                </Button>
            </div>
            <Footer />
        </main>
    )
}

export default DetailArtikel