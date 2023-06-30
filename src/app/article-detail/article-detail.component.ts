import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article-service.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  articleId!: number;
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.articleId = +this.route.snapshot.params['id'];
    this.getArticleDetails();
  }

  getArticleDetails() {
    this.articleService.getArticles().subscribe((articles: Article[]) => {
      this.article = articles.find(article => article.id === this.articleId) as Article;
      if (this.article === undefined) {
        // Manejar si no se encuentra el artículo
      }
    });
  }
}
