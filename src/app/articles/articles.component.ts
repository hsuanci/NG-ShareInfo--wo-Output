import { Component, OnInit, Input } from '@angular/core';
import { Article } from './Model/articleModel';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  @Input() item: Article;
  constructor() {}

  ngOnInit(): void {}
}
