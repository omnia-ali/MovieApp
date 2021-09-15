import { PaginatedResult } from './../../_core/model/pagination';
import { MovieService } from './../../_core/services/movie.service';
import { Movie } from './../../_core/model/movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  recommendations: PaginatedResult<Movie[]>;
  movieId: number;
  constructor(private MovieService: MovieService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.GetMovie();
 this.Getrecommendations();
  }
  GetMovie() {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['id'] != null ? params['id'] : null;
    });
    if (this.movieId != null) {
      this.MovieService.getDetails(this.movieId).subscribe(data => {
        this.movie = data;
        console.log(this.movie);
      });
    }
  }
  Getrecommendations() {
    if (this.movieId != null) {
      this.MovieService.getrecommendations(1, this.movieId).subscribe(data => {
        this.recommendations = data;
        console.log("recommendations");
        console.log(this.recommendations);
      });
    }

   this.MovieService. genre().subscribe(data=>console.log(data));
  }
}
