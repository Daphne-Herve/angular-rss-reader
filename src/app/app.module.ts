import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/pages/login/login.component';
import { NavMenuComponent } from './components/share/nav-menu/nav-menu.component';
import { WrapperComponent } from './components/share/wrapper/wrapper.component';
import { NewsActionsComponent } from './components/share/news-actions/news-actions.component';
import { FavorisComponent } from './components/pages/favoris/favoris.component';
import { ResearchComponent } from './components/pages/research/research.component';
import { DiscussionsComponent } from './components/pages/discussions/discussions.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LoginComponent,
    NavMenuComponent,
    WrapperComponent,
    NewsActionsComponent,
    FavorisComponent,
    ResearchComponent,
    DiscussionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
