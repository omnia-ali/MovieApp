import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/_core/model/tvshow.model';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvshowDetailsComponent implements OnInit {

  constructor() { }
show:Tvshow;
  ngOnInit(): void {
  }

}
