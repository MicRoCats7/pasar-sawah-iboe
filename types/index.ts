export interface MenuItem {
    id: number;
    category_id: number;
    category_name: string;
    name: string;
    description: string;
    price: number;
    rate: number | null;
    total_review: number;
    image: string;
    is_available: boolean;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface CardMenuProps {
    menuItems: MenuItem[];
}