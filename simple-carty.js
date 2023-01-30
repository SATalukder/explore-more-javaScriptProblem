
const shoppingCart = [
    { name: 'Shoe', price: 1200 },
    { name: 'Shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 600 }

];

function totalCostCalculator(poducts) {
    let totalPrice = 0;
    for (let i = 0; i < poducts.length; i++) {
        const poduct = poducts[i];
        totalPrice += poduct.price;
        // console.log(poduct);
    }
    return totalPrice;

}

const totalCost = totalCostCalculator(shoppingCart)
console.log(totalCost);