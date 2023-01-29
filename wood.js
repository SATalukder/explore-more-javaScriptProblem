/*
fixed: per item wood requirements
1. chair --> 3 cft
2. table -->10 cft
3. bed --> 50 cft

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const total = chairWood + tableWood + bedWood;
    return total;
}
const chairQuantity = 1;
const tableQuantity = 1;
const bedQuantity = 1;
const totalWood = woodCalculator(chairQuantity, tableQuantity, bedQuantity);
console.log("Total Wood required: " + totalWood);
