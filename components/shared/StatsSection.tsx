import { Separator } from '../ui/separator'

function StatsSection() {
    return (
        <section className='w-full pt-32 flex items-center justify-center gap-20 h-full max-w-[1320px] mx-auto'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-6xl font-normal font-inter text-second'>30+</h2>
                <p className='font-playfair text-2xl font-normal text-second'>Tempat Pemancingan</p>
            </div>
            <Separator />
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-6xl font-normal font-inter text-second'>20+</h2>
                <p className='font-playfair text-2xl font-normal text-second'>Menu Lauk utama</p>
            </div>
            <Separator />
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-6xl font-normal font-inter text-second'>15+</h2>
                <p className='font-playfair text-2xl font-normal text-second'>Variant Makanan ringan</p>
            </div>
            <Separator />
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-6xl font-normal font-inter text-second'>10+</h2>
                <p className='font-playfair text-2xl font-normal text-second'>Jenis Minuman</p>
            </div>
        </section>
    )
}

export default StatsSection