import { PiArrowDownRightThin } from "react-icons/pi"
import { Button } from "../ui/button"

function AboutSection() {
    return (
        <section className="mt-20 flex flex-col items-center justify-center max-w-[1320px] mx-auto">
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-inter font-normal text-2xl text-second opacity-55'>Tentang Kita</h3>
                <h2 className='font-playfair font-normal text-4xl text-second'>Nikmati Hidangan Lezat di Tengah Alam</h2>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-20 mt-20">
                <div className="flex flex-col gap-6 max-w-[50%]">
                    <p className="font-inter text-[22px] font-normal text-second">Rasakan pengalaman bersantap yang berbeda di W.M. Pinggir Sawah Iboe, tempat di mana cita rasa khas rumahan berpadu dengan suasana tenang sawah dan kolam pemancingan. Kami hadir untuk menghadirkan momen santai bersama keluarga, teman, maupun rekan kerja.</p>
                    <p className="font-inter text-[22px] font-normal text-second">Di sini, Anda bisa menikmati hidangan segar hasil olahan sendiri sambil memancing langsung di kolam kami. Setiap sudut tempat ini dirancang untuk menghadirkan kenyamanan dan keasrian khas pedesaan.</p>
                    <p className="font-inter text-[22px] font-normal text-second">Dengan bahan baku yang segar dan pelayanan yang ramah, kami berkomitmen memberikan pengalaman makan terbaik untuk Anda yang rindu suasana desa.</p>
                    <Button
                        variant='main'
                        size='custom'
                        className="w-[45%] text-xl"
                    >
                        CONTACT KAMI
                        <PiArrowDownRightThin size={34} />
                    </Button>
                </div>
                <div className="w-full max-w-[50%] flex items-center justify-center">
                    <img
                        src="/assets/images-about/image-about.svg"
                        alt="About Image"
                        width={600}
                        height={538}
                        draggable={false}
                        loading='lazy'
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutSection