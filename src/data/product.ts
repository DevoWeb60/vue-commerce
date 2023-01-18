import type { ProductInterface } from "@/types";
export default [
    {
        id: 1,
        title: "Apple AirPods 2",
        description: "Écouteur sans fil avec boîtier de charge",
        image: "airpods2.webp",
        price: 148,
        category: "accessory",
    },
    {
        id: 2,
        title: "Apple AirPods Max",
        description: "Casque audio sans fil",
        image: "airpodsmax.webp",
        price: 629,
        category: "accessory",
    },
    {
        id: 3,
        title: "Samsung Galaxy Tab A7 Lite",
        description: 'Tablette 10.4" 32 Go',
        image: "samsung-galaxy-tab-A7-lite.webp",
        price: 133.26,
        category: "tablet",
    },
    {
        id: 4,
        title: "Samsung Galaxy Tab S6 Lite",
        description: 'Tablette 10.4" 64 Go',
        image: "samsung-galaxy-tab-s6-lite.webp",
        price: 275,
        category: "tablet",
    },
    {
        id: 5,
        title: "Macbook Pro M2",
        description: 'Ordinateur portable 13.3" 256 Go',
        image: "macbook-pro-m2.webp",
        price: 1449,
        category: "computer",
    },
    {
        id: 6,
        title: "Macbook Air M1",
        description: 'Ordinateur portable 13.3" 256 Go',
        image: "macbook-air-m1.webp",
        price: 999,
        category: "computer",
    },
    {
        id: 7,
        title: "ASUS Zenbook Fold 17",
        description: 'Ordinateur portable 17.3" 512 Go',
        image: "asus-zenbook-fold-17.webp",
        price: 3999.99,
        category: "computer",
    },
    {
        id: 8,
        title: "ASUS Zenbook",
        description: 'Ordinateur portable 14" 512 Go',
        image: "asus-zenbook.webp",
        price: 799.99,
        category: "computer",
    },
] as ProductInterface[];
