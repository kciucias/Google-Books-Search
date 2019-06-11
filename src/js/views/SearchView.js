import { elements } from './base';

export const getInput = () => elements.searchInput.value;


const renderBook = book => {
	const markup = `
		<li>
	        <a class="results__link" href="#${book.id}">	        	
	            <div class="results__data"> 
		            <figure class="results__fig">
		        		<img src="${book.volumeInfo.imageLinks.smallThumbnail}" alt="${book.volumeInfo.title}">
		        	</figure>
		        	<div class="results__info">	
		                <h4 class="results__name">${book.volumeInfo.title}</h4>
		                <p class="results__author">${book.volumeInfo.authors}</p>
	            	</div>
	            </div>
	        </a>
	    </li>   
	`;
	elements.searchResList.insertAdjacentHTML('beforeend', markup);
};


export const renderResults = result => {
	result.forEach(renderBook);
};
	