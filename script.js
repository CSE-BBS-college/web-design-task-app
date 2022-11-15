const form = document.querySelector('#form')
let id = 1;
form.addEventListener('submit', event => {
  // submit event detected
  event.preventDefault()
    const input = document.querySelector('#task')
    const date_input = document.querySelector('#date')
    const task_list = document.getElementsByClassName('taskList')[0]
    const task_value = input.value;
    const date_value = date_input.value;
    if (task_value && date_value) {
        task_list.innerHTML += `<div class="task" id=${id} >
            <h2>${task_value}</h2>
            <p> ${date_value}</p>
            <i class="gg-trash"" onclick="deleteTask(${id})"></i>
            </div>`
        id++;
        input.value = ''
        date_input.value = ''
    } else {
        alert('Please fill in the fields')
    }
})

const deleteTask = (id) => {
    const task = document.getElementById(id)
    task.remove()
}

window.addEventListener('load', () => {
    document.getElementById('date').valueAsDate = new Date();
})