import { KeyValue, KeyValuePipe } from '@angular/common';
import { MovieStatus } from './../../_core/model/movie-status';
import { PageEvent } from '@angular/material/paginator';
import { Movie } from './../../_core/model/movie.model';
import { PaginatedResult } from './../../_core/model/pagination';
import { MovieService } from './../../_core/services/movie.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private MovieService: MovieService, private route: ActivatedRoute) { }
  movies: PaginatedResult<Movie[]>;
  type: string;
  ngOnInit(): void {
    this.GetMoviesType();

  }
Keys :string[]= [];
MovieStatus=MovieStatus;
  GetMoviesType() {
    this.route.params.subscribe(params => {
      this.type = params['type'] != null ? params['type'] : null;
    });
    console.log(this.type);
this.GetPaged(1);
    // switch (this.type) {
    //   case MovieStatus[ MovieStatus.nowPlaying]:
    //     this.GetPaged(1, "now_playing");
    //     break;
    //   case MovieStatus[ MovieStatus.topRated]:
    //     this.GetPaged(1, "top_rated");
    //     break;
    //   case MovieStatus[ MovieStatus.upComing]:
    //     this.GetPaged(1, "upcoming");
    //     break;
    //   default:
    //     this.GetPaged(1, "popular");
    //     break;
    // }
  }
  GetPaged(pageNumber: number) {
    // this.MovieService.getList(pageNumber).subscribe(data => {
    //   this.movies = data;
    //   console.log(this.movies);
    // });
   let Localtype:string="";
    switch (this.type) {
      case MovieStatus[ MovieStatus.nowPlaying]:
        Localtype="now_playing";
        break;
      case MovieStatus[ MovieStatus.topRated]:
        Localtype= "top_rated";
        break;
      case MovieStatus[ MovieStatus.upComing]:
        Localtype = "upcoming";
        break;
      default:
        Localtype= "popular";
        break;
    }
    this.MovieService.GenericList(Localtype, pageNumber).subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
  public pageChanged(PageEvent: PageEvent) {
    this.GetPaged( PageEvent.pageIndex + 1);
  }

}
