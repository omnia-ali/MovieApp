import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/_core/model/movie.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class recommendationsComponent implements OnInit {
  @Input() recommendations: Movie[];
  constructor() { }

  ngOnInit(): void {
  }

}
