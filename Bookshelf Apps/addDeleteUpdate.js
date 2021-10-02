const DONEREAD_LIST_ID = 'done-read';
const NOTREAD_LIST_ID = 'not-read';
const BOOK_ITEMID = 'itemID';
const NOTREAD_COUNT_ID = 'not-read-count';
const DONEREAD_COUNT_ID = 'done-read-count';
let NOTREAD_COUNT = 0;
let DONEREAD_COUNT = 0;

function addBook() {

    const newTitle = document.getElementById("input-title").value;
    const newAuthor = document.getElementById("input-author").value;
    const newYear = document.getElementById("input-year").value;
    const newStatus = document.getElementById("input-checklist").checked;

    if(newTitle == '' || newAuthor == '' || newYear == ''){
        alert('There cannot be an empty column!');
        return;
    }
    
    document.getElementById("input-title").value = '';
    document.getElementById("input-author").value = '';
    document.getElementById("input-year").value = '';
    document.getElementById("input-checklist").checked = false;

    const book = makeBook(newTitle,newAuthor,newYear,newStatus);
    const bookObject = composeBookObject(newTitle,newAuthor,newYear,newStatus);

    book[BOOK_ITEMID] = bookObject.id;
    books.push(bookObject);

    let listID;
    if(newStatus){
        listID = DONEREAD_LIST_ID;
        DONEREAD_COUNT++;
    }
    else{
        listID = NOTREAD_LIST_ID;
        NOTREAD_COUNT++;
    }

    const listBook = document.getElementById(listID);

    listBook.append(book);
    updateCount()
    updateDataToStorage();
    showStatusRak();
}

function makeBook(newTitle,newAuthor,newYear,newStatus) {
    const title = document.createElement('h3');
    title.innerText = newTitle;
    title.classList.add('title');

    const author = document.createElement("p");
    author.innerHTML = 'Penulis: <span class=\'author\'>'+newAuthor+'</span>';
    
    const year = document.createElement("p");
    year.innerHTML = 'Tahun: <span class=\'year\'>'+newYear+'</span>';

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-wrapper');

    if (!newStatus)
        btnContainer.append(createCheckButton(), createEditButton(), createTrashButton());
    else
        btnContainer.append(createUndoButton(), createEditButton(), createTrashButton());

    const container = document.createElement('div');
    container.classList.add('item');

    container.append(title,author,year,btnContainer);
    return container;
}

function createButton(iconButton, textButton, eventListener) {
    const button = document.createElement('button');
    button.classList.add('btn-action');

    const icon = document.createElement('i');
    icon.classList.add('fas', iconButton);

    button.innerHTML = icon.outerHTML+' '+textButton;

    button.addEventListener("click", function (event) {
        eventListener(event);
    });

    return button;
}

function createCheckButton() {
    return createButton('fa-check-circle', 'Finish' , function (event) {
        addBookToCompleted(event.target.parentElement.parentElement);
    });
}

function createEditButton() {
    return createButton('fa-edit', 'Edit' , function (event) {
        showEditModal(event.target.parentElement.parentElement);
    });
}

function createTrashButton() {
    return createButton('fa-trash', 'Delete' , function (event) {
        removeBookFromCompleted(event.target.parentElement.parentElement);
    });
}

function createUndoButton() {
    return createButton('fa-sync-alt', 'Reread' , function (event) {
        undoBookFromCompleted(event.target.parentElement.parentElement);
    });
}



function addBookToCompleted(bookItem) {
    const title = bookItem.querySelector(".title").innerText;
    const author = bookItem.querySelector(".author").innerText;
    const year = bookItem.querySelector(".year").innerText;

    const newBook = makeBook(title, author, year, true);

    const book = findBook(bookItem[BOOK_ITEMID]);
    book.isCompleted = true;
    newBook[BOOK_ITEMID] = book.id;

    const listSudahBaca = document.getElementById(DONEREAD_LIST_ID);
    listSudahBaca.append(newBook);
    bookItem.remove();

    DONEREAD_COUNT++;
    NOTREAD_COUNT--;
    updateCount();
    updateDataToStorage();
    showStatusRak();
}

function showEditModal(bookItem) {
    const book = findBook(bookItem[BOOK_ITEMID]);
    const modalEdit = document.getElementById('modal-edit');
    document.body.classList.toggle('overflow');

    document.getElementById('edit-id').value = bookItem[BOOK_ITEMID];
    document.getElementById('edit-title').value = book.title;
    document.getElementById('edit-author').value = book.author;
    document.getElementById('edit-year').value = book.year;

    modalEdit.style.display = 'block';
}

function saveEditBook() {
    const modalEdit = document.getElementById('modal-edit');

    const idBook = document.getElementById('edit-id').value;
    const judul = document.getElementById('edit-title').value;
    const penulis = document.getElementById('edit-author').value;
    const tahun = document.getElementById('edit-year').value;
    
    const bookPosition = findBookIndex(parseInt(idBook));

    books[bookPosition].title = judul;
    books[bookPosition].author = penulis;
    books[bookPosition].year = tahun;

    refreshDataFromBooks();
    modalEdit.style.display = 'none';
    document.body.classList.toggle('overflow');

    updateDataToStorage();
}


function removeBookFromCompleted(bookItem) {
    let statusHapus = confirm('Are you sure you want to delete this book?');

    if(!statusHapus) return;

    const bookPosition = findBookIndex(bookItem[BOOK_ITEMID]);
    const bookStatus = books[bookPosition].isCompleted;

    if(bookStatus){
        DONEREAD_COUNT--;
    }else{
        NOTREAD_COUNT--;
    }

    books.splice(bookPosition, 1);
    bookItem.remove();

    updateCount();
    updateDataToStorage();
    showStatusRak();
}

function undoBookFromCompleted(bookItem) {
    const judul = bookItem.querySelector(".title").innerText;
    const penulis = bookItem.querySelector(".author").innerText;
    const tahun = bookItem.querySelector(".year").innerText;

    const newBook = makeBook(judul, penulis, tahun, false);

    const book = findBook(bookItem[BOOK_ITEMID]);
    book.isCompleted = false;
    newBook[BOOK_ITEMID] = book.id;

    const listBelumBaca = document.getElementById(NOTREAD_LIST_ID);
    listBelumBaca.append(newBook);
    bookItem.remove();
    DONEREAD_COUNT--;
    NOTREAD_COUNT++;
    updateCount();
    updateDataToStorage();
    showStatusRak();
}

function updateCount() {
    document.getElementById(NOTREAD_COUNT_ID).innerText = NOTREAD_COUNT;
    document.getElementById(DONEREAD_COUNT_ID).innerText = DONEREAD_COUNT;
}

function showStatusRak() {
    const statusRakBelumBaca = document.querySelector('.status-rak-belumbaca');
    const statusRakSudahBaca = document.querySelector('.status-rak-sudahbaca');

    if(NOTREAD_COUNT == 0 && statusRakBelumBaca == null){
        const newStatusBelumBaca = document.createElement('h4');
        newStatusBelumBaca.classList.add('status-rak-belumbaca','text-center');
        newStatusBelumBaca.innerText = 'No unread books';
        document.getElementById(NOTREAD_LIST_ID).append(newStatusBelumBaca);
    }
    
    if(NOTREAD_COUNT > 0 && statusRakBelumBaca != null){
        statusRakBelumBaca.remove();
    }
    
    if(DONEREAD_COUNT == 0 && statusRakSudahBaca == null){
        const newStatusSudahBaca = document.createElement('h4');
        newStatusSudahBaca.classList.add('status-rak-sudahbaca','text-center');
        newStatusSudahBaca.innerText = 'No books have been read';
        document.getElementById(DONEREAD_LIST_ID).append(newStatusSudahBaca);
    }
    
    if(DONEREAD_COUNT > 0 && statusRakSudahBaca != null){
        statusRakSudahBaca.remove();
    }
}

function refreshDataFromBooks() {
    const listBelumBaca = document.getElementById(NOTREAD_LIST_ID);
    const listSudahBaca = document.getElementById(DONEREAD_LIST_ID);

    listBelumBaca.innerHTML = '';
    listSudahBaca.innerHTML = '';

    DONEREAD_COUNT = 0;
    NOTREAD_COUNT = 0;
  
    for(book of books){
        const newBook = makeBook(book.title, book.author, book.year, book.isCompleted);
        newBook[BOOK_ITEMID] = book.id;
  
        if(book.isCompleted){
            DONEREAD_COUNT++;
            listSudahBaca.append(newBook);
        } else {
            NOTREAD_COUNT++;
            listBelumBaca.append(newBook);
        }
    }
    updateCount();
    showStatusRak();
}