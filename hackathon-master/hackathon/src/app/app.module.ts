import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPageLayoutComponent } from './components/menu-page-layout/menu-page-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { FeedComponent } from './components/feed/feed.component';
import { InserirComponent } from './components/inserir/inserir.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { TelaPoliticoComponent } from './components/tela-politico/tela-politico.component';

import {MatInputModule} from '@angular/material/input';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MenuPageLayoutComponent,
    HomeComponent,
    FeedComponent,
    InserirComponent,
    PostComponent,
    TelaPoliticoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,

    MatInputModule,
    HttpClientModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
