const btn = document.querySelector('.btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const select = document.querySelector('#option');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Name input valildation
    if(nameInput.value == "") {
     nameInput.classList.add('redInput');
     nameInput.setAttribute('placeholder',`Oops, this field is still empty`);
  }else{
      nameInput.classList.remove('redInput');
      nameInput.setAttribute('placeholder',``);
  }

    // Email input validation 
    if(emailInput.value == "" || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value))) {
       emailInput.classList.add('redInput');
       emailInput.value = '';
       emailInput.setAttribute('placeholder', `You have entered an invalid email address!`);
    }  
    // empty input after submit
     nameInput.value = '';
     emailInput.value = '';
})


// title input
const optionTitle = document.getElementById('option');
const optionInput = document.querySelector('.optionInput');

optionTitle.addEventListener('change', () => {
    if(optionTitle.value == 'other'){
        optionInput.style.display = 'block';
    }else{
        optionInput.style.display = 'none';
    }
})

// colorOne, colorTwo option
const colorOne = document.querySelector('.colorOneDiv');
const colorTwo = document.querySelector('.colorTwoDiv');
const design = document.getElementById('design');

design.addEventListener('change', () => {
    if(design.value == 'jsPuns'){
      colorOne.style.display = 'block';
      colorTwo.style.display = 'none';
    }else if(design.value == 'IJS'){
         colorTwo.style.display = 'block';
         colorOne.style.display = 'none';
    }
})

// total amout for activities
const checkboxInput = document.querySelectorAll('.checkboxes input');
const checkboxLabel = document.querySelectorAll('label');
const checkBox = document.querySelector('.checkboxes');
const spanText = document.querySelector('.totalAmount');
const totalText = document.querySelector('.total');
let total = 0;


checkboxInput.forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.target.id == 'main' && e.target.value == 'on'){
           console.log(e.target.value)
           console.log(e.target);
           total = total + 200;
           spanText.innerText = '$'+ total;
           totalText.append(spanText);
           totalText.style.display = 'block';
        }else{
           console.log(e.target.value);
        }
    })
})



// payment option
//paypal option
const payment = document.getElementById('payment');
const paypal = document.querySelector('.paypal');
const bitcoin = document.querySelector('.bitcoin');
const creditCard = document.querySelector('.creditCard');
const date = document.querySelector('.date');

payment.addEventListener('change', () => {
    if(payment.value == 'payPal') {
       paypal.style.display = 'block';
       bitcoin.style.display = 'none';
       creditCard.style.display = 'none';
       date.style.dysplay = 'none';
    }else if(payment.value == 'bitcoin') {
       bitcoin.style.display = 'block';
       paypal.style.display = 'none';
       creditCard.style.display = 'none';
       date.style.dysplay = 'none';
    }else if(payment.value == 'creditCard'){
       bitcoin.style.display = 'none';
       paypal.style.display = 'none';
       creditCard.style.display = 'flex';
       date.style.dysplay = 'flex';

       valid_credit_card(document.querySelector('.creditCardInput'))
    }
})


function valid_credit_card(value) {
	  // accept only digits, dashes or spaces
		if (/[^0-9-\s]+/.test(value)) return false;
		if (value === "") return false; 
		// The Luhn Algorithm. It's so pretty.
		var nCheck = 0, nDigit = 0, bEven = false;
		value = value.replace(/\D/g, "");
		for (var n = value.length - 1; n >= 0; n--) {
			var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);

			if (bEven) {
				if ((nDigit *= 2) > 9) nDigit -= 9;
			}
			nCheck += nDigit;
			bEven = !bEven;
		}
		return (nCheck % 10) === 0;
	}


 
    


        
    
