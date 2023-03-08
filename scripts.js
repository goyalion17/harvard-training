const btn = document.querySelector('.btn')
const color = document.querySelectorAll('button[data-color]')
const hello = document.querySelector('h1')
const count = document.querySelector('h2')
const form = document.querySelector('.form')
const names = document.querySelector('#name');

color.forEach(item => {
    item.addEventListener('click', () => {
        hello.style.color = item.dataset.color
    })
})

let counter = 0;

btn.addEventListener('click', () => {  
    counter++
    count.innerHTML = counter

    if (counter %10 === 0) {
        alert(`Count is now ${counter}`)
    }
    
    hello.innerHTML === "Hello" ? hello.innerHTML = 'Goodbye' : hello.innerHTML = 'Hello'
})

form.addEventListener('submit', () => {
    let userName = names.value
    alert(`Hello, ${userName}!`)
})
