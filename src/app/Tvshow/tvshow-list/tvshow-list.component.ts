import { PaginatedResult } from './../../_core/model/pagination';
import { TvshowService } from './../../_core/services/tvshow.service';
import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/_core/model/tvshow.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrls: ['./tvshow-list.component.css']
})
export class TvshowListComponent implements OnInit {

  constructor(private TvshowService: TvshowService, private route: ActivatedRoute,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
 this.GetType();
    this.GetPaged(1);
  }
  shows: PaginatedResult<Tvshow[]>;
  type: string;
  ngOnInit(): void {

  }
  GetType() {
    this.route.params.subscribe(params => {
      this.type = params['type'] != null ? params['type'] : null;
    });
  }
  GetPaged(pageNumber: number) {
    this.TvshowService.getGenericList(this.type,pageNumber).subscribe(data => {
      this.shows = data;
      console.log(this.shows);
    });
  }

  public pageChanged(PageEvent: PageEvent) {
    this.GetPaged(PageEvent.pageIndex + 1);
  }
}
