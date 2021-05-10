const btn = document.querySelector('.btn');
const nameInput = document.querySelector('#name');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Name input check
    if(nameInput.value == "") {
     nameInput.classList.add('redInput');
     nameInput.setAttribute('placeholder',`Oops, this field is still empty`);
  }
})

