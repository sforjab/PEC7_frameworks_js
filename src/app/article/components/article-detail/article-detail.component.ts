import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/article/models/article';
import { ArticleService } from 'app/article/services/article-service.service';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  // Identificador del artículo
  articleId!: number;
  // Variable par almacenar el artículo
  article!: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit() {
    // Obtenemos el valor del parámetro 'id' de la ruta actual
    this.articleId = +this.route.snapshot.params['id'];
    // Se obtienen los datos del artículo
    this.getArticleDetails();
  }

  // Recuperamos los datos de un artículo determinado
  getArticleDetails() {
    // Para ello obtenemos el listado de artículos y filtramos por el que tenga un id que coincida con el de la ruta actual
    this.articleService.getArticles().subscribe((articles: Article[]) => {
      this.article = articles.find(article => article.id === this.articleId) as Article;
    });
  }
}
