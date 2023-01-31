
function ticketPrice(ticketQuantity) {

    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity > 200) {
        const restTicketQuantity = ticketQuantity - 200;
        const first100TicketPrice = 100 * first100Rate;
        const second100TicketPrice = 100 * second100Rate;
        const restTicketPrice = restTicketQuantity * restTicketRate;

        const totalCost = first100TicketPrice + second100TicketPrice + restTicketPrice;
        return totalCost;
    }
    else if (ticketQuantity > 100 && ticketQuantity <= 200) {
        const restTicketQuantity = ticketQuantity - 100;
        const first100TicketPrice = 100 * first100Rate;
        const restTicketPrice = restTicketQuantity * second100Rate;

        const totalCost = first100TicketPrice + restTicketPrice;
        return totalCost;
    }
    else {
        return ticketQuantity * first100Rate;
    }

}


const ticketQuantity = 120;
const getDiscount = ticketPrice(ticketQuantity);
console.log('Ticket Price: ' + getDiscount)