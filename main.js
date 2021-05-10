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
console.log(optionTitle);
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





 
    


        
    
