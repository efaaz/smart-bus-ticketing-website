let buttons = document.querySelectorAll('.myButton');
    buttons.forEach(function(button) {
    button.addEventListener('click', function() {
     
      let buttonId = this.id;

      execute(buttonId)
    });
  });

  let applyBtn = document.getElementById('applyCuppon')
  applyBtn.addEventListener('click', function() {
     
    applyDiscount()
  });

  let nextBtn = document.getElementById('nextBtn')
  nextBtn.addEventListener('click', function() {
     
    nextButton()
  });


  function colorChangetoGreen(buttonId) {
    let btn = document.getElementById(buttonId);
    btn.classList.remove("bg-[#F7F8F8]");
    btn.classList.add("clicked");
  }

  function seatsLeft(){
    let getSpan = document.getElementById('seatsLeft');
    let spanValue = getSpan.innerText;
    let latestValue = spanValue - 1;
    getSpan.innerText = latestValue
  }


function seatCount(){
    let getSpan = document.getElementById('seatCount');
    let spanValue = parseInt(getSpan.innerText) ;
    let latestValue = spanValue + 1;
    if (latestValue <= 4) {
        getSpan.innerText = latestValue;
        return latestValue;
    }
    
    return latestValue 
    
  }

  function appendCustomDiv(butonid) {
    let newDiv = document.createElement('div');
    newDiv.className = 'appendedDiv flex justify-between';
    newDiv.innerHTML = `
      <p class="text-[#03071299] font-inter text-base font-normal">${butonid}</p>
      <p class="text-[#03071299] font-inter text-base font-normal">Economy</p>
      <p class="text-[#03071299] font-inter text-base font-normal">550</p>
    `;

    let parentDiv = document.getElementById('appendPosition');

    // Append the new div inside the parent div
    parentDiv.appendChild(newDiv);
  }


  function totalPrice(numOfTickets) {
    let displayTotalPrice = document.getElementById('totalPrice');
    let displayGrandTotal = document.getElementById('grandPrice');
    const ticketPrice = 550;
    let totalPrice = numOfTickets * ticketPrice;
     displayTotalPrice.innerText = totalPrice;
     displayGrandTotal.innerText = totalPrice;
  }

  function applyDiscount(){
    let displayGrandTotal = document.getElementById('grandPrice');
    let inputDiscount = document.getElementById('input-field');
    let beforeDiscount = parseFloat(displayGrandTotal.innerText) ;

    let inputElement = document.getElementById('myInput');

    let cuppon = inputElement.value;

    if (cuppon === 'NEW15') {
        let afterDiscount = beforeDiscount -(beforeDiscount * 0.15)
        displayGrandTotal.innerText = afterDiscount;
        console.log(afterDiscount);

        inputDiscount.classList.add("hidden");
    } else if (cuppon === 'Couple 20'){
        let afterDiscount = beforeDiscount -(beforeDiscount * 0.20)
        displayGrandTotal.innerText = afterDiscount;
        console.log(afterDiscount);

        inputDiscount.classList.add("hidden");
    }else {
        alert("Enter valid cuppon");
    }
  }

  function nextButton(){
    
    let mainsite = document.getElementById('mainSite');
    let modalsite = document.getElementById('modal');
    mainsite.classList.add("hidden");
    modalsite.classList.remove("hidden");

  }
