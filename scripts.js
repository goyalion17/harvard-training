const btn = document.querySelector('.btn')
const color = document.querySelectorAll('button[data-color]')
const hello = document.querySelector('h1')
const count = document.querySelector('h2')
const form = document.querySelector('.form')
const names = document.querySelector('#name');
const select = document.querySelector('.select');
const form1 = document.querySelector('#form1')
const task = document.querySelector('#task');
const tasks = document.querySelector('#tasks');


/* color.forEach(item => {
    item.addEventListener('click', () => {
        hello.style.color = item.dataset.color
    })
}) */

/* select.onchange = function () {
    hello.style.color = this.value
}
 */
/* let counter = 0;

btn.addEventListener('click', () => {  
    counter++
    count.innerHTML = counter

    if (counter %10 === 0) {
        alert(`Count is now ${counter}`)
    }
    
    hello.innerHTML === "Hello" ? hello.innerHTML = 'Goodbye' : hello.innerHTML = 'Hello'
}) */


// TASKS
form1.onsubmit = () => {
    const value = task.value

    const li = document.createElement('li');
    li.innerHTML = value;

    tasks.append(li)
    
    return false;
}
