
const shoppingCart = [
    { name: 'Shoe', price: 1200, quqntity: 2 },
    { name: 'Shirt', price: 2200, quqntity: 5 },
    { name: 'pant', price: 3700, quqntity: 4 },
    { name: 'belt', price: 600, quqntity: 3 }

];

function totalCostCalculator(products) {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotalPrice = product.price * product.quqntity;
        totalPrice = totalPrice + productTotalPrice;
        // console.log(poduct);
    }
    return totalPrice;

}

const totalCost = totalCostCalculator(shoppingCart)
console.log(totalCost);