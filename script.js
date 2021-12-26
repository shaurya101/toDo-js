const input = document.querySelector('#input');
const button = document.querySelector('button');
const list = document.querySelector('#list');
input.focus();

button.addEventListener('click', function(){
    let value = input.value;
    input.value = "";
    if(!value=='')    // else if even nothing is enetered, still delete will be printed in the list
    display(value);
    else
    input.focus();
})
function display(value){
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = value;
    li.append(p);
    const deleteIcon = document.createElement('span');   // Adding Google Icont through JS. Essentially writing <span class="material-icons">delete</span>
    deleteIcon.textContent = 'delete';
    deleteIcon.classList.add('material-icons')
    li.append(deleteIcon);
    list.appendChild(li);
    input.focus();
    deleteIcon.addEventListener('click', function(){
        list.removeChild(li);
    })
}

// Add a logic that if the text input fills up the box and more, the input box size increases. And resets after input is done.
// If text is long it should go on newline
// Add an important feature
