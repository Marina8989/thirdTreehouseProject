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
  }

    // Email input validation 
    if(emailInput.value == "" || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value))) {
       emailInput.classList.add('redInput');
       emailInput.value = '';
       emailInput.setAttribute('placeholder', `You have entered an invalid email address!`);
    }  

    
})

    


        
    
