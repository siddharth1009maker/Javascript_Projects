//BOOK constructor

function Book(title , author , isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI(){}

UI.prototype.addBookList = function(book)
{
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class = "delete">X</a></td>`;
    list.appendChild(row);
}

UI.prototype.clearFields = function()
{
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("isbn").value = '';
}

UI.prototype.showAlert = function(message, className){

    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.getElementById("book-form");
    container.insertBefore(div,form);
    setTimeout(function(){
        document.querySelector(".alert").remove();
    },3000);
}

UI.prototype.clearBook = function(target){
    if(target.className === "delete")
    {
        target.parentElement.parentElement.remove();
    }
}

document.getElementById("book-form").addEventListener("submit",
function(e){
    const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
    // console.log(title , author , isbn);

    const book = new Book(title , author , isbn);

    const ui = new UI();
    // console.log(ui);

    if(title === '' || author === '' || isbn === '')
    {
        ui.showAlert("Please enter all the fields" , "error");
    }
    else
    {
        ui.addBookList(book);
        ui.showAlert("Book Added" , "success");
        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById("book-list").addEventListener("click",function(e){
    const ui = new UI();

    ui.clearBook(e.target);
    ui.showAlert("Book Deleted","success");
});