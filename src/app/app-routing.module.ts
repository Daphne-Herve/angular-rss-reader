import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscussionsComponent } from './components/pages/discussions/discussions.component';
import { FavorisComponent } from './components/pages/favoris/favoris.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ResearchComponent } from './components/pages/research/research.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'discussions', component: DiscussionsComponent },

  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
