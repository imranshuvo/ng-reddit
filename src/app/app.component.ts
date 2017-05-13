import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	articles: Article[];

  constructor(){
  	this.articles = [
  		new Article("Angular 4","http://angular.io", 2),
  		new Article("AngularJS","http://angularjs.com", 5),
  	];
  
  }

  sortedArticles(): Article[]{
  	return this.articles.sort((a:Article,b: Article) => b.points - a.points);
  }


  addArticle(title: HTMLInputElement,link: HTMLInputElement ): boolean {
  	console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  	this.articles.push(new Article(title.value,link.value, 0));
  	title.value = '';
  	link.value = '';
  	return false;
  }
}
