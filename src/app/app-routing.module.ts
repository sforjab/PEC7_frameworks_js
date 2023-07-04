import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta de redirección inicial al componente de inicio de sesión
  { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) }, // Ruta para cargar el módulo de artículos (lazy loading)
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)  } // Ruta para cargar el módulo de usuarios (lazy loading)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa las rutas principales y las configura para la aplicación
  exports: [RouterModule] // Exporta el módulo de enrutamiento configurado
})
export class AppRoutingModule { }
