import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { observable, Observable } from 'rxjs';
import { SearchItem } from '../SearchItem';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private loading: boolean = false;
  itunes: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private ituneserv: SearchService) {
    this.route.params.subscribe(params => {
      console.log('Search Route params : ', params);
      if (params["term"]) {
        this.doSearch(params["term"]);
      }
    });
    // const term = this.route.snapshot.paramMap.get('term');
    // console.log('Search Route params : ' + term);
    // if (term) {
    //   this.doSearch(term);
    // }
  }

  ngOnInit() {
  }
  doSearch(term: string) {
    this.ituneserv.search(term).subscribe(result => {
      console.log('res : ', result.results);
      this.loading = false;
      this.itunes = result.results;
      // console.log('tem : ', this.temp);
    });
  }

  onSearch(term: string) {
    this.router.navigate(["search", { term: term }]);
  }
}