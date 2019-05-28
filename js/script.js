var URL = "https://www.googleapis.com/books/v1/volumes?q=";
const btnSearch = document.getElementById("search");


function searchBooks() {
    clearAllBooks();
    var bookName = document.getElementById('book-name').value; 
    fetch(URL + bookName)
        .then(resp => {
          if (resp.ok) {
            return resp.json()
          } else {
            return Promise.reject(resp)
          }
        })
        .then(showBooks)
        .catch(error => {
          console.log('Google Books API Error!')
        });
}

function showBooks(resp) {
    for (var i = 0; i < resp.items.length; i++) {
    var item = resp.items[i];
    var booki = 'book'+(i+1);
      // book div
    var imgDiv = document.createElement('div')
    document.getElementById(booki).appendChild(imgDiv)
    imgDiv.className = "img" 
      // img
      var img = document.createElement('img')
      img.src = item.volumeInfo.imageLinks.smallThumbnail
      imgDiv.appendChild(img)
    // data div
    var dataDiv = document.createElement('div')
    document.getElementById(booki).appendChild(dataDiv)
    dataDiv.className = "data"
      // title
      var title  = document.createElement('h2')
      dataDiv.appendChild(title)
      title.innerHTML = item.volumeInfo.title 
      // authors
      var authors  = document.createElement('h3')
      dataDiv.appendChild(authors)
      authors.innerHTML = item.volumeInfo.authors
      // description
      //var description = document.createElement('p')
      //description.innerHTML = item.volumeInfo.description
      //dataDiv.appendChild(description)    
      }
}

btnSearch.addEventListener("click", searchBooks);

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    for(j=0; j<elements.length; j++){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function clearAllBooks(){
  removeElementsByClass('img');
  removeElementsByClass('data');
}

/*
for (var i = 0; i < 10; i++) {
var item = resp.items[i];
console.log(`Title: ${item.volumeInfo.title}`); 
}
resp.items.forEach(item => {
*/



