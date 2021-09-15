import { StarRatingComponent } from './star-rating/star-rating.component';
import { TruncatePipe } from './_core/helper/truncate.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './Movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './Movie/movie-details/movie-details.component';
import { TvshowListComponent } from './Tvshow/tvshow-list/tvshow-list.component';
import { TvshowDetailsComponent } from './Tvshow/tvshow-details/tvshow-details.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import {  MatButtonModule } from "@angular/material/button";
import { MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  recommendationsComponent } from './Movie/recommendations-movies/recommendations.component';
import { SimilarMoviesComponent } from './Movie/similar-movies/similar-movies.component';
import { SimilarShowsComponent } from './Tvshow/similar-shows/similar-shows.component';
import { RecommendationsShowsComponent } from './Tvshow/recommendations-shows/recommendations-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    MovieDetailsComponent,
    TvshowListComponent,
    TvshowDetailsComponent,
    LoginComponent,
    RegisterComponent,
    TruncatePipe,
    StarRatingComponent,
    recommendationsComponent,
    SimilarMoviesComponent,
    SimilarShowsComponent,
    RecommendationsShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    BrowserAnimationsModule,
MatButtonModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[MatButtonModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
