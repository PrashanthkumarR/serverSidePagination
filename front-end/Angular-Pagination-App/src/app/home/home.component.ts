import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pager = {};
  pageOfItems = [];

  constructor(  private http: HttpClient,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
  }

  private loadPage(page) {
    // get page of items from api
    this.http.get<any>(`http://localhost:4000/api/items?page=${page}`).subscribe(x => {
        this.pager = x.pager;
        this.pageOfItems = x.pageOfItems;
    });
}

}
