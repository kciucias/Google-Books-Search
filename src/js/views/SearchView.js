import { elements } from './base';

export const getInput = () => elements.searchInput.value;


const renderBook = el => {
	const markup = `
		<li>
	        <a class="results__link" href="#${el.id}">
	            <div class="results__data">
	                <h4 class="results__name">${el.volumeInfo.title}</h4>
	                <p class="results__author">${el.volumeInfo.authors}</p>
	            </div>
	        </a>
	    </li>   
	`;
	elements.searchResList.insertAdjacentHTML('beforeend', markup);
};


export const renderResults = result => {
	result.forEach(renderBook);
};
	