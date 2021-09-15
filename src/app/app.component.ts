import { TvStatus } from './_core/model/tv-status';
import { MovieStatus } from './_core/model/movie-status';
import { MovieService } from './_core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'MovieApp';
/**
 *
 */
constructor(private movieService: MovieService) {
}
keys = Object.keys;
public MovieStatus = MovieStatus;
 TvStatus = TvStatus;


 asIsOrder(a:any, b:any) {
  return 1;
}
  ngOnInit(): void {

this.movieService.getDetails(848278).subscribe(data=>
  console.log(data));
  }
}
