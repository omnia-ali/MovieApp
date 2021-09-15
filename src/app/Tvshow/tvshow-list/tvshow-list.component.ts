import { PaginatedResult } from './../../_core/model/pagination';
import { TvshowService } from './../../_core/services/tvshow.service';
import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/_core/model/tvshow.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrls: ['./tvshow-list.component.css']
})
export class TvshowListComponent implements OnInit {

  constructor(private TvshowService: TvshowService, private route: ActivatedRoute) { }
  shows: PaginatedResult<Tvshow[]>;
  type: string;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'] != null ? params['type'] : null;
    });
    this.GetPaged(1);
  }
  GetPaged(pageNumber: number) {
    this.TvshowService.getList(pageNumber).subscribe(data => {
      this.shows = data;
      console.log(this.shows);
    });
  }

  public pageChanged(PageEvent: PageEvent) {
    this.GetPaged(PageEvent.pageIndex + 1);
  }
}
