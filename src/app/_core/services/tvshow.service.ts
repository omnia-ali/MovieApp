import { map } from 'rxjs/operators';
import { PaginatedResult } from './../model/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tvshow } from '../model/tvshow.model';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  //https://api.themoviedb.org/3/tv/latest?api_key=0f9aaa5388569478355b34c9eabb2ebd&language=en-US

  params = new HttpParams()
    .set("language", "en-US").
    set("api_key", "0f9aaa5388569478355b34c9eabb2ebd");
  constructor(private http: HttpClient) { }

  // getList(page:number, language?: string) {
  //    this.params = this.params.set('page', page.toString());
  // return this.http
  //   .get<PaginatedResult<Tvshow[]>>("https://api.themoviedb.org/3/tv/popular"
  //     , { params: this.params })
  //   .pipe(
  //     map(response => {
  //       return response;
  //     })
  //   )

  // }
  getGenericList(type?: string, page?: number, language?: string) {
    if (page !== undefined || page != null)
      this.params = this.params.set('page', Number(page).toString());
    if (language !== undefined || language != null)
      this.params = this.params.set('language', language);
    console.log(type);
    if (type==null)   type="popular";

    return this.http
      .get<PaginatedResult<Tvshow[]>>(`https://api.themoviedb.org/3/tv/${type}`
        , { params: this.params })
      .pipe(
        map(response => {

          return response;
        })
      )

  }
  getDetails(movieId: number) {
    return this.http
      .get<Tvshow>("https://api.themoviedb.org/3/movie/" + movieId, { params: this.params }
      )
      .pipe(
        map(response => {
          console.log(response);
          return response;
        })
      )


  }
}
