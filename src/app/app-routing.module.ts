import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { TvshowDetailsComponent } from './Tvshow/tvshow-details/tvshow-details.component';
import { TvshowListComponent } from './Tvshow/tvshow-list/tvshow-list.component';
import { MovieDetailsComponent } from './Movie/movie-details/movie-details.component';
import { MovieListComponent } from './Movie/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ""
    , component: HomeComponent
  },
  {
    path: "login"
    , component: LoginComponent
  },
  {
    path: "register"
    , component: RegisterComponent
  },
  {
    path: "Movies/List"
    , component: MovieListComponent
  },
  {
    path: "Movies/List/:type"
    , component: MovieListComponent
  },
  {
    path: "Movie/datails"
    , component: MovieDetailsComponent
  },
  {
    path: "Tvshow/List"
    , component: TvshowListComponent
  },
  {
    path: "Tvshow/List/:type"
    , component: MovieListComponent
  },
  {
    path: "Tvshow/details"
    , component: TvshowDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
