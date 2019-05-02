import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
  private tracks: any[];

  constructor(private route: ActivatedRoute, private getTrackService: SearchService, private _http: HttpClient) {
    this.route.parent.params.subscribe(parms => {
      this.getTrackService.getTrackList(parms.artistId).subscribe(
        result => {
          this.tracks = result.results;
        }
      )
    })
  }

  ngOnInit() {
  }

}
