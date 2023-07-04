import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './components/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';

// Definición de las rutas del módulo ArticleModule
const routes: Routes = [
  { path: 'article/list', component: ArticleListComponent }, // Ruta para la lista de artículos
  { path: 'article/create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] }, // Ruta para crear un nuevo artículo, protegida por la guarda de autenticación ('AuthGuard')
  { path: 'article/:id', component: ArticleDetailComponent }, // Ruta para mostrar los detalles de un artículo específico
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importación de las rutas definidas en el módulo
  exports: [RouterModule] // Exportación del módulo de enrutamiento
})
export class ArticleRoutingModule { }
