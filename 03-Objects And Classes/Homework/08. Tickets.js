function solve(tickets, sortCriteria) {

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination,
            this.price = Number(price),
            this.status = status
        };
    };
    
    const ticketsList = [];

    for (const ticket of tickets) {
        const [destination, price, status] = ticket.split('|');

        const newTicket = new Ticket(destination, Number(price), status);

        ticketsList.push(newTicket);
    }

    if(sortCriteria === 'destination'){
        ticketsList.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if(sortCriteria === 'price'){
        ticketsList.sort((a, b) => a.price - b.price);
    }
    else if(sortCriteria === 'status')
    {
        ticketsList.sort((a, b) => a.status.localeCompare(b.status));
    }

    return ticketsList;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));