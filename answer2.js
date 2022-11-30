// array of product
const item = [ 
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}, 
]

// Filtering so that it can bring cheap product
const cheapProduct = [];

for(let product of item){
    if(product.price < 6){
        cheapProduct.push(product);
    }

}
console.log("Cheapest product is " + cheapProduct);