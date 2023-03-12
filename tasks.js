const form = document.querySelector('form')
const task = document.querySelector('#task');
const tasks = document.querySelector('#tasks');

form.onsubmit = () => {
    const value = task.value

    const li = document.createElement('li');
    li.innerHTML = value;

    tasks.append(li)
    
    return false;
}