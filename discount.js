/*
1.if ticket numbers is less than 100, per ticket price:100 tk.
2.if ticket numbers is more than 100 ,but less than 200.First 100 tickets will be 100/tickets and rest tickets will be 90 tk per piece.
1.if ticket numbers is more than 200
first 100--->:100 tk.
101-200-->90tk.
200+-->70tk.

*/
function discountCalculate(numbers) {

   if (numbers > 200) {
      const restNumber = numbers - 200;
      const first100 = 100 * 100;
      const second100 = 100 * 90;
      const extra200 = restNumber * 70;

      const result = first100 + second100 + extra200;
      return result;

   }
   else if (numbers > 100 && numbers <= 200) {
      const restNumber = numbers - 100;
      const first100 = 100 * 100;
      const extra100 = restNumber * 90;

      const result = first100 + extra100;
      return result;


   }
   else {
      return numbers * 100;
   }

}

const ticketNumbers = 120;

const getDiscount = discountCalculate(ticketNumbers);
console.log(getDiscount);