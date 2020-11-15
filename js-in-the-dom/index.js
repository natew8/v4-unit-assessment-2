
const formBtn = document.getElementById('close-form')
const form = document.querySelector('.form')

function toggler(){
    if(formBtn.innerText === 'X'){
        formBtn.innerText = '+'
    } else{
        formBtn.innerText = 'X'
    }form.classList.toggle('hide')
} 
formBtn.addEventListener('click', toggler)



const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

const emailList = []

function validateForm(e){
    if(!nameInput.value && !emailInput.value){
        emailInput.style.border = '2px solid #ff0000'
        nameInput.style.border = '2px solid #ff0000'
        alert('Please enter your name and email address to subscribe!')
    } else if(!nameInput.value ){
        nameInput.style.border = '2px solid #ff0000'
        alert('Please enter your name to subscribe!')
    }else if(!emailInput.value){
        emailInput.style.border = '2px solid #ff0000'
        alert('Please enter your email to subscribe!')
    }else {
        emailList.push({'name': nameInput.value, 'email': emailInput.value})
        displayThankYou()
    }
}
form.addEventListener('submit',(e) => {
    validateForm()
    e.preventDefault()
})
const formContainer = document.querySelector('.form-container')

function displayThankYou(){
    formContainer.innerText = 'Thank You!'
    setTimeout(() => {
        formContainer.remove()
    }, 3000);
}
nameInput.addEventListener('change', () => {
    nameInput.style.border = 'none'
})
emailInput.addEventListener('change', () => {
    emailInput.style.border = 'none'
})



let cart = document.createElement('DIV')
const main = document.querySelector('.hero')

let cartItems = 0

function addToCart(){
    if(cartItems === 0){
        cartItems = 1;
        cart.setAttribute('class','cart-display');
        cart.innerText = 'Your Cart: 1 item';
        main.appendChild(cart);
    } else {
        cartItems += 1;
        cart.innerText = `You Cart: ${cartItems} items`
    }
};