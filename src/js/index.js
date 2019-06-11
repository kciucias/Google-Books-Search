import Search from './models/Search';
import * as searchView from './views/SearchView';
import { elements } from './views/base';

/***Global state of the app
* Search object
* current book object
* book list object
* online stores object
*/
const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput(); //'harry' //todo- temporary query
  console.log(query);

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Preparing UI for results
    // 4) Search for books
    await state.search.getResults(); // returns a promise because 
    // getresults is async function
    
    // 5) render results on UI - only to happen when we receive results from API
    //console.log(state.search.result);
    //searchView.renderResults(state.search.result);
    console.log(searchView.renderResults(state.search.result));
  }
}


// na formie, brak przeladowania po klikniecia na form
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault()
  controlSearch();
});



/*
const config = {
  GOOGLE_BOOKS_KEY: 'AIzaSyDIF0WQCb5u3o2BU0FTuhTqVUhdEtPLqJ8'
}
*/
//const googleBooksKey = config.GOOGLE_BOOKS_KEY;


//var query = document.getElementById('book-name').value;



/*
var URL = "https://www.googleapis.com/books/v1/volumes?q=";
const btnSearch = document.getElementById("search");

function searchBooks() {
    clearAllBooks();
    // to co wpiszemy
    var bookName = document.getElementById('book-name').value; 
    fetch(URL + bookName, {cache: 'no-store'
    })
        .then(resp => {
          if (resp.ok) {
            return resp.json()
          } else {
            return Promise.reject(resp)
          }
        })
        .then(json => {
          showBooks(json);
          console.log(json);
        })
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

*/

/*
for (var i = 0; i < 10; i++) {
var item = resp.items[i];
console.log(`Title: ${item.volumeInfo.title}`); 
}
resp.items.forEach(item => {
*/


