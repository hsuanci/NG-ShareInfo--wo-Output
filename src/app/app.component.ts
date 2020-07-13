import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './articles/Model/articleModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-rx-learn';
  items: Article[];
  constructor(private articleServic: ArticleService) {
    this.articleServic.doGetArticle().subscribe((result) => {
      this.items = result.articles;
    });
    this.articleServic.clickStream.subscribe((result) => {
      this.doEvtRespone(result);
    });
  }
  doEvtRespone(evt: any): void {
    this.items = this.items.filter((item) => {
      return item.title.match(evt) !== null;
    });
  }
}
