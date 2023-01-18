import type { CategoryType } from "@/types";
import type { FiltersInterface } from "@/types";

export const DEFAULT_FILTERS: FiltersInterface = {
    search: "",
    priceRange: [0, 5000],
    category: "all",
};

export const CATEGORIES: {
    value: CategoryType;
    label: string;
}[] = [
    { value: "all", label: "Tous" },
    { value: "computer", label: "Ordinateur" },
    { value: "accessory", label: "Accessoires" },
    { value: "tablet", label: "Tablette" },
];
