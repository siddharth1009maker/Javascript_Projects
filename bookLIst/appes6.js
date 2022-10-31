class Book {
    constructor(title , author , isbn)
    {
        this.title = title ;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class = "delete">X</a></td>`;
        list.appendChild(row);
    }
    showAlert(message , className){
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
    clearFields(){
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("isbn").value = '';
    }
    deleteBook(target) {
        if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
        }
  }
}

class Store{
    static getBooks()
    {
        let books;
        if(localStorage.getItem("books") === null)
        {
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static displayBooks()
    {
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach(book=>{
            ui.addBookToList(book);
        })
    }
    static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    console.log(isbn);
    books.forEach(function(book, index){
     if(book.isbn === isbn) {
      books.splice(index, 1);
     }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
     
    Store.addBook(book);
    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});
