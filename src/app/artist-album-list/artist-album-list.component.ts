import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  albums: any[] = [];

  constructor(private route: ActivatedRoute, private getAlbumService: SearchService, private _http: HttpClient) {
    this.route.parent.params.subscribe(parms => {
      this.getAlbumService.getAlbumList(parms.artistId).subscribe(
        result => {
          this.albums = result.results;
        }
      )
    })
   }

  ngOnInit() {
  }

}
