import { Separator } from '../ui/separator'

function StatsSection() {
    return (
        <section className='md:pt-32 pt-12'>
            <div className='w-full md:flex items-center justify-center gap-20 h-full text-center max-w-[1320px] mx-auto hidden'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h2 className='text-6xl font-normal font-inter text-second'>30+</h2>
                    <p className='font-playfair text-2xl font-normal text-second'>Tempat Pemancingan & meja keluarga</p>
                </div>
                <Separator orientation="vertical" className="h-24" />
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h2 className='text-6xl font-normal font-inter text-second'>7+</h2>
                    <p className='font-playfair text-2xl font-normal text-second'>Menu Lauk utama</p>
                </div>
                <Separator orientation="vertical" className="h-24" />
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h2 className='text-6xl font-normal font-inter text-second'>8+</h2>
                    <p className='font-playfair text-2xl font-normal text-second'>Variant Minuman</p>
                </div>
                <Separator orientation="vertical" className="h-24" />
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h2 className='text-6xl font-normal font-inter text-second'>10+</h2>
                    <p className='font-playfair text-2xl font-normal text-second'>Jenis Cemilan</p>
                </div>
            </div>

            <div className='w-full h-full text-center max-w-[1320px] mx-auto md:hidden px-4'>
                <div className='relative'>
                    <div className='grid grid-cols-2 gap-8 mb-8 relative'>
                        <Separator className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2" orientation='vertical' />

                        <div className='flex flex-col items-center justify-center gap-2 pr-4'>
                            <h2 className='text-4xl font-normal font-inter text-second'>7+</h2>
                            <p className='font-playfair text-lg font-normal text-second'>Menu Lauk utama</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 pl-4'>
                            <h2 className='text-4xl font-normal font-inter text-second'>8+</h2>
                            <p className='font-playfair text-lg font-normal text-second'>Variant Minuman</p>
                        </div>
                    </div>

                    <Separator className="my-8" orientation='horizontal' />

                    <div className='grid grid-cols-2 gap-8 relative'>
                        <Separator className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2" orientation='vertical' />

                        <div className='flex flex-col items-center justify-center gap-2 pr-4'>
                            <h2 className='text-4xl font-normal font-inter text-second'>30+</h2>
                            <p className='font-playfair text-lg font-normal text-second'>Tempat Pemancingan & meja keluarga</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 pl-4'>
                            <h2 className='text-4xl font-normal font-inter text-second'>10+</h2>
                            <p className='font-playfair text-lg font-normal text-second'>Jenis Cemilan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection