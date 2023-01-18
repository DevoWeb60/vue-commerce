export type CategoryType = "all" | "computer" | "accessory" | "tablet";

export interface FiltersInterface {
    search: string;
    priceRange: [number, number];
    category: CategoryType;
}

export interface FilterUpdate {
    search?: string;
    priceRange?: [number, number];
    category?: CategoryType;
}
