import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any[] = [];

  constructor(private route: ActivatedRoute, private getTrackService: SearchService, private _http: HttpClient) {
    this.route.params.subscribe(params => {
      console.log('Parent Param : ', params.artistId);
      this.getTrackService.getArtist(params.artistId).subscribe(
        result => {
          this.artist = result.results[0]
        }
        )
    });
  }

  ngOnInit() {
  }

}
