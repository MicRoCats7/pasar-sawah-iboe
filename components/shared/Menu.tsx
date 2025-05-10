"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import CardMenu from "./CardMenu"

function Menu() {
    return (
        <section className='flex flex-col items-center justify-center mt-20 max-w-[1320px] mx-auto' id="menu">
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-inter font-normal text-2xl text-second opacity-55'>Menu Kami</h3>
                <h2 className='font-playfair font-normal text-4xl text-second'>Lorem Ipsum</h2>
            </div>
            <Tabs defaultValue="minuman" className="w-full flex items-center justify-center mt-20">
                <TabsList className="w-full max-w-[556px]">
                    <TabsTrigger value="minuman" className="text-xl font-normal font-inter opacity-70">Minuman</TabsTrigger>
                    <TabsTrigger value="sampingan" className="text-xl font-normal font-inter opacity-70">Sampingan</TabsTrigger>
                    <TabsTrigger value="lauk" className="text-xl font-normal font-inter opacity-70">Lauk</TabsTrigger>
                </TabsList>
                <TabsContent value="minuman">
                    <CardMenu />
                </TabsContent>
                <TabsContent value="sampingan">
                    <CardMenu />
                </TabsContent>
                <TabsContent value="lauk">
                    <CardMenu />
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default Menu