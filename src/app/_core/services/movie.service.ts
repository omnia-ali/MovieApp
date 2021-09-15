;
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../model/movie.model';
import { PaginatedResult } from '../model/pagination';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  params = new HttpParams()
    .set("language", "en-US").
    set("api_key", "0f9aaa5388569478355b34c9eabb2ebd");
  constructor(private http: HttpClient) { }

  // getList(page: number, language?: string) {
  //   this.params = this.params.set('page', page.toString());
  //   return this.http
  //     .get<PaginatedResult<Movie[]>>("https://api.themoviedb.org/3/movie/popular"
  //       , { params: this.params })
  //     .pipe(
  //       map(response => {
  //         return response;
  //       })
  //     )

  // }
  getDetails(movieId: number) {
    return this.http
      .get<Movie>("https://api.themoviedb.org/3/movie/" + movieId, { params: this.params }
      )
      .pipe(
        map(response => {
          console.log(response);
          return response;
        })
      )


  }

  getrecommendations(page: number, movieId: number, language?: string) {
    this.params = this.params.set('page', page.toString());
    return this.http
      .get<PaginatedResult<Movie[]>>(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`
        , { params: this.params })
      .pipe(
        map(response => {
          console.log("similar");
          console.log(response);
          return response;
        })
      )

  }
  GenericList(type?: string, page?: number, language?: string) {
    if (page !== undefined || page != null)
      this.params = this.params.set('page', Number(page).toString());
    if (language !== undefined || language != null)
      this.params = this.params.set('language', language);
      console.log(type);
      if (type==null)   type="popular";

    return this.http
      .get<PaginatedResult<Movie[]>>(`https://api.themoviedb.org/3/movie/${type}`
        , { params: this.params })
      .pipe(
        map(response => {

          return response;
        })
      )

  }
  genre() {
    return this.http
      .get<PaginatedResult<Movie[]>>(`https://api.themoviedb.org/3/genre/movie/list`
        , { params: this.params })
      .pipe(
        map(response => {
          console.log("similar");
          console.log(response);
          return response;
        })
      )
  }
}
