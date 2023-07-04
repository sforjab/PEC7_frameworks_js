import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './components/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ArticleService } from './services/article-service.service';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleDetailComponent,
    DefaultImagePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArticleRoutingModule
  ],
  providers: [
    ArticleService,
    AuthGuard
  ]
})
export class ArticleModule { }
