import { PiArrowDownRightThin } from "react-icons/pi"
import { Button } from "../ui/button"

function AboutSection() {
    return (
        <section className="pt-32 flex flex-col items-center justify-center max-w-[1320px] mx-auto" id="about">
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-inter font-normal text-2xl text-second opacity-55'>Tentang Kita</h3>
                <h2 className='font-playfair font-normal text-4xl text-second'>Nikmati Hidangan Lezat di Tengah Alam</h2>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-20 mt-20">
                <div>
                    <div className="flex flex-col gap-6 max-w-full">
                        <p className="font-inter text-lg font-normal text-second">Nikmati pengalaman bersantap yang unik di W.M. Pinggir Sawah Iboe, tempat cita rasa rumahan berpadu dengan suasana alami di tengah sawah dan kolam pemancingan. Kami hadir untuk menciptakan momen santai bersama keluarga, teman, atau rekan kerja dengan suasana yang tenang dan nyaman.</p>
                        <p className="font-inter text-lg font-normal text-second">Untuk kenyamanan Anda, berikut ini kami lampirkan rincian biaya ongkir agar pemesanan Anda lebih jelas dan transparan:</p>
                    </div>
                    <table className="mt-10 w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="font-inter text-sm font-semibold text-second border border-black py-2 text-center">Komponen</th>
                                <th className="font-inter text-sm font-semibold text-second border border-black py-2 text-center">Ketarangan Tambahan</th>
                                <th className="font-inter text-sm font-semibold text-second border border-black py-2 text-center">Biaya (Rp)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="flex flex-col font-inter text-sm font-normal text-second py-2 px-1.5 border-l border-b border-black">
                                    1. Tarif Dasar Awal
                                    <span className="pl-5 font-semibold italic text-sm text-[#B9B9B9]">0-2Km</span>
                                </td>
                                <td className="font-inter text-sm font-normal text-second py-2 px-1.5 border border-black">Biaya Tetap untuk jarak pendek</td>
                                <td className="font-inter text-sm font-normal text-second py-2 px-1.5 border border-black">Rp. 5000,-</td>
                            </tr>
                            <tr>
                                <td className="flex flex-col font-inter text-sm font-normal text-second py-2 px-1.5 border-l border-b border-black">
                                    2. Tarif Tambahan
                                    <span className="pl-5 font-semibold italic text-sm text-[#B9B9B9]">{'>3 Km'}</span>
                                </td>
                                <td className="font-inter text-sm font-normal text-second py-2 px-1.5 border border-black">3 Km x Rp.2500/km</td>
                                <td className="font-inter text-sm font-normal text-second py-2 px-1.5 border border-black">Rp. 7500,-</td>
                            </tr>
                            <tr>
                                <td className="flex flex-col font-inter text-sm font-normal text-second py-2 px-1.5 border-l border-b border-black">
                                    3. Subtotal Ongkir Jarak
                                    <span className="pl-5 font-semibold italic text-sm text-[#B9B9B9]">{'>3 Km'}</span>
                                </td>
                                <td className="font-inter text-sm font-normal text-second py-2 px-1.5 border border-black">Total biaya berdasarkan jarak sejauh 5 km</td>
                                <td className="font-inter text-sm font-normal text-second py-2 px-1.5 border border-black">Rp. 12500,-</td>
                            </tr>
                            <tr>
                                <td className="flex flex-col font-inter text-sm font-normal text-second py-2 px-1.5 border-l border-b border-black pb-[81px]">
                                    4. Faktor Lain
                                    <span className="pl-5 font-semibold italic text-sm text-[#B9B9B9]">Tambahan Biaya</span>
                                </td>
                                <td className="font-inter text-sm font-normal text-second py-2 px-1.5 border border-black">
                                    Lokasi masuk gang, jalan kecil, potensi makadam, sinyal lemah
                                    <p className="mt-10">
                                        Tambahan lain akan diberitaukan saat pemesanan via whatsapp / telepon
                                    </p>
                                </td>
                                <td className="font-inter text-sm font-normal text-second py-2 px-1.5 border border-black">Rp. 4000,- <span>sekitar</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full max-w-[50%] flex flex-col gap-16 items-center justify-center">
                    <img
                        src="/assets/images-about/image-about.svg"
                        alt="About Image"
                        width={567}
                        height={406}
                        draggable={false}
                        loading='lazy'
                    />
                    <a href="#contact">
                        <Button
                            variant='main'
                            size='custom'
                            className="w-full text-xl"
                        >
                            CONTACT KAMI
                            <PiArrowDownRightThin size={34} />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutSection