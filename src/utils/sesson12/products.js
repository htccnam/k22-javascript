const products = [
    { id: 1, name: "iPhone 15", price: 22000000, category: "Điện thoại" },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 20000000,
        category: "Điện thoại",
    },
    { id: 3, name: "MacBook Air M2", price: 26000000, category: "Laptop" },
    { id: 4, name: "Dell XPS 13", price: 30000000, category: "Laptop" },
    { id: 5, name: "AirPods Pro", price: 6000000, category: "Phụ kiện" },
    { id: 6, name: "Apple Watch", price: 9000000, category: "Phụ kiện" },
];

export function getFilteredProducts(productlist, category) {
    if (category === "Tất cả") {
        return productlist;
    }
    return productlist.filter((product) => product.category === category);
}

export function sortByPrice(productlist, order = "asc") {
    return [...productlist].sort((a, b) => {
        if (order === "asc") {
            return a.price - b.price;
        } else if (order === "desc") {
            return b.price - a.price;
        }
        return 0;
    });
}
