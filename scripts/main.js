function execute(buttonId){

    // How many tickets are selected
    let totalTicket = seatCount();

    if (totalTicket <= 4) {

        colorChangetoGreen(buttonId);

        seatsLeft();

        appendCustomDiv(buttonId);

        totalPrice(totalTicket)
        
    }else {
        alert("Too many tickets selected. Please choose fewer tickets.");
    }


    console.log('here is button id: ', buttonId);
    console.log('Total ticket: ', totalTicket);
}

