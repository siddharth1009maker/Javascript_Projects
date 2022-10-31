const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load all eventListeners
loadEventListeners();

function loadEventListeners()
{
    document.addEventListener("DOMContentLoaded",getTasks);
    form.addEventListener("submit",addTask);
    taskList.addEventListener("click",removeTask);
    clearBtn.addEventListener("click",clearAllTasks);
    filter.addEventListener("keyup",filterTasks);
}

function getTasks()
{
    let tasks;
    if(localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(task=>{
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));
        const link = document.createElement("a");
        link.className = "delete-item";
        link.classList.add("secondary-content");
        link.innerHTML = '<i class = "fa fa-remove"></i>'; 
        li.appendChild(link);   
        taskList.appendChild(li);
    });
}

function addTask(e)
{
    if(taskInput.value === '')
    {
        alert("Please add a valid task");
    }
    else{
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement("a");
        link.className = "delete-item";
        link.classList.add("secondary-content");
        link.innerHTML = '<i class = "fa fa-remove"></i>'; 
        li.appendChild(link);   
        taskList.appendChild(li);
        storTaskInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    e.preventDefault();
}

function storTaskInLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function removeTask(e)
{
    if(e.target.parentElement.classList.contains("delete-item"))
    {
        if(confirm("Are you sure ?"))
        {
            e.target.parentElement.parentElement.remove();
            removeTaskLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskLocalStorage(taskItem)
{
    let tasks;
    if(localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach((task,index)=>{
        if(task === taskItem.textContent)
        {
            tasks.splice(index,1);
        }
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function clearAllTasks(e)
{
    if(confirm("Are you sure you want to clear all tasks"))
    {
        while(taskList.hasChildNodes())
        {
            taskList.removeChild(taskList.firstChild);
        }
    }

    clearTaskFomLocalStorage();
}

function clearTaskFomLocalStorage()
{
    let tasks ;
    if(localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.splice(0,tasks.length);
    }

    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function filterTasks(e)
{
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll(".collection-item").forEach(task=>{
        const item = task.firstChild.textContent.toLowerCase();
        if(item.indexOf(text)!=-1)
        {
            task.style.display = "block";
        }
        else{
            task.style.display ="none";
        }
    });
}