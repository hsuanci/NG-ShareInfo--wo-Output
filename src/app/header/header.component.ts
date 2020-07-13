import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  keyword = '';
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}
  doInputEvent(evt: InputEvent): void {
    this.keyword = (evt.target as HTMLInputElement).value;
  }
  doClickEvent(evt: Event): void {
    this.articleService.clickStream.next(this.keyword);
  }
}
