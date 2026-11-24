const products= [
    {name: "Mouse", price: 10.99, stock: 100, category: "Electronics", rating: 4.5},
    {name: "Keyboard", price: 29.99, stock: 50, category: "Electronics", rating: 4.2},
    {name: "Monitor", price: 299.99, stock: 20, category: "Electronics", rating: 4.7},
    {name: "Headphones", price: 49.99, stock: 30, category: "Accessories", rating: 4.0},
    {name: "Smartphone", price: 699.99, stock: 10, category: "Electronics", rating: 4.8},
    {name: "Tablet", price: 399.99, stock: 15, category: "Electronics", rating: 4.3},
    {name: "Laptop", price: 999.99, stock: 5, category: "Electronics", rating: 4.6}
]

const under200 = products.filter(product => product.price < 200);
console.log(under200);

const instock= products.filter(product => product.stock > 10);
console.log(instock);

const electronics= products.filter(product => product.category== 'Electronics');
console.log(electronics);

const toprated= products.filter(product => product.rating > 4.5);
console.log(toprated);

const multiplethings= products.filter(product => product.price <=250 && product.rating >= 4.5 && product.stock >10);
console.log(multiplethings);

const sortedProductasc = products.sort((a, b) => a.price - b.price);
console.log(sortedProductasc);

const sortedProductdesc = products.sort((a, b) => b.price - a.price);
console.log(sortedProductdesc);

const sortratingdesc = products.sort((a, b) => b.rating - a.rating);
console.log(sortratingdesc);



