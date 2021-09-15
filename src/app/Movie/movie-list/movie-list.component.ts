import { KeyValue, KeyValuePipe } from '@angular/common';
import { MovieStatus } from './../../_core/model/movie-status';
import { PageEvent } from '@angular/material/paginator';
import { Movie } from './../../_core/model/movie.model';
import { PaginatedResult } from './../../_core/model/pagination';
import { MovieService } from './../../_core/services/movie.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private MovieService: MovieService, private route: ActivatedRoute,private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};

  this.GetMoviesType();
  this.GetPaged(1);

   }
  movies: PaginatedResult<Movie[]>;
  type: string;

  ngOnInit(): void {


}
  GetMoviesType() {
    this.route.params.subscribe(params => {
      this.type = params['type'] != null ? params['type'] : null;
    });
    console.log(this.type);

  }
  GetPaged(pageNumber: number) {
    this.MovieService.GenericList(this.type, pageNumber).subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
  public pageChanged(PageEvent: PageEvent) {
    this.GetPaged(PageEvent.pageIndex + 1);
  }
}
