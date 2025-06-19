"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import CardMenu from "./CardMenu"
import { useState, useEffect } from "react";
import { getCategory, getMenu } from "@/services/api";
import { Category, MenuItem } from "@/types";

function Menu() {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [category, setCategory] = useState<Category[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("");
    const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

    const getItemsMenu = async (categoryId: number) => {
        await getMenu(categoryId)
            .then((res: any) => {
                setMenu(res.data.results || res.data.result);
            })
            .catch((err) => {
                console.error("Error fetching menu:", err);
            })
    };

    const getCategoryItems = async () => {
        await getCategory()
            .then(async (res: any) => {
                const categories = res.data.results || res.data.result;
                setCategory(categories);

                if (categories.length > 0) {
                    const firstCategory = categories[0];
                    const firstCategorySlug = createSlug(firstCategory.name);
                    setActiveCategory(firstCategorySlug);
                    setActiveCategoryId(firstCategory.id);

                    await getItemsMenu(firstCategory.id);
                }
            })
            .catch((err) => {
                console.error("Error fetching menu:", err);
            })
    };

    const handleTabChange = async (categorySlug: string) => {
        setActiveCategory(categorySlug);

        const selectedCategory = category.find(cat =>
            createSlug(cat.name) === categorySlug
        );

        if (selectedCategory) {
            setActiveCategoryId(selectedCategory.id);
            await getItemsMenu(selectedCategory.id);
        }
    };

    const createSlug = (name: string) => {
        return name.toLowerCase().replace(/\s+/g, '-');
    };

    useEffect(() => {
        getCategoryItems();
    }, []);

    return (
        <section className='flex flex-col items-center justify-center pt-32 max-w-[1320px] mx-auto' id="menu">
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-inter font-normal text-2xl text-second opacity-55'>Dari Dapur Kami untuk Anda</h3>
                <h2 className='font-playfair font-normal text-4xl text-second'>MENU KAMI</h2>
            </div>
            <Tabs
                value={activeCategory}
                onValueChange={handleTabChange}
                className="w-full flex flex-col items-center justify-center mt-20"
            >
                <TabsList className="w-full max-w-[556px]">
                    {category?.map((item) => {
                        const slug = createSlug(item.name);
                        return (
                            <TabsTrigger
                                key={item.id}
                                value={slug}
                                className="w-full font-inter font-semibold text-lg text-second opacity-70"
                            >
                                {item.name}
                            </TabsTrigger>
                        );
                    })}
                </TabsList>

                <TabsContent value={activeCategory} className="w-full">
                    <CardMenu menuItems={menu} />
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default Menu