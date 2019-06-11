import axios from 'axios';


export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		const key = 'AIzaSyDIF0WQCb5u3o2BU0FTuhTqVUhdEtPLqJ8';
		const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
		try {
		    const res = await axios(`${URL}${this.query}&key=${key}`);
		    this.result = res.data.items;
		    console.log(this.result);	    

		 } catch (error) {
		    alert()
	  	}  
	}
};


