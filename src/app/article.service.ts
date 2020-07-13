import { Injectable } from '@angular/core';
import { Article, ArticleAPI } from './articles/Model/articleModel';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  keyworld = '';
  clickStream = new Subject<string>();

  constructor(private http: HttpClient) {}
  doGetArticle(): Observable<ArticleAPI> {
    return this.http.get<ArticleAPI>(
      'https://conduit.productionready.io/api/articles'
    );
  }
}
