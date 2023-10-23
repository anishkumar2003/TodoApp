
let todo=JSON.parse(localStorage.getItem('todo'))|| [];//fetch array from local storage if exist

// To display list of todo on load
displayitems();


// function to add items in to do list.
function addTodo()
{
    let inputElement=document.querySelector('#Todo_input');
    let todoItem=inputElement.value;

    let inputDate=document.querySelector('#Todo_date');
    let toDate=inputDate.value;

    // to show alert message when user does not enter text or date
    let msgDisplay=document.querySelector('.alertmsg');


    // checking user is enter proper date and text or not
    if(toDate && todoItem)
    {
        todo.push({item:todoItem,duedate:toDate});
    }
    else
    {
        // display alert message to 
        msgDisplay.style.display="block";
        msgDisplay.innerText="Please enter both text and date"

        // message will disappear after some time
        setTimeout(() => {
            msgDisplay.style.display = "none";
        }, 2000)

    }
    inputDate.value='';
    inputElement.value='';
    localStorage.setItem('todo',JSON.stringify(todo));
    displayitems();
}


// function to delte and update todo list in localstorage and array
function deleteItem(index) {
    if (index >= 0 && index < todo.length) {
        todo.splice(index, 1);
        localStorage.setItem('todo', JSON.stringify(todo)); // Update local storage
        displayitems();
    }
}


// function to display todolist items
function displayitems()
{
    let displayElement=document.querySelector('.todo_list');
    let newhtml='';
    for(let i=0;i<todo.length;i++)
    {
        let {item,duedate}=todo[i]
        newhtml+=`
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn-delete" onclick="deleteItem(${i})">Delete</button>
        `
    }
    displayElement.innerHTML=newhtml;
}
