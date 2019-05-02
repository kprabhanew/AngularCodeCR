import { Injectable } from '@angular/core';
import { SearchItem } from './SearchItem';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'
@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";

  constructor(private _http: HttpClient) { }

  search(term: string): Observable<any> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=5`;
    console.log(apiURL);
    return this._http.get(apiURL).pipe(
      tap(r => console.log(r))
    ) //
  }

  getArtist(artistId: number): Observable<any> {
    const apiArtitstURL = `https://itunes.apple.com/lookup?id=${artistId}`
    return this._http.get(apiArtitstURL).pipe(
      tap(result => console.log(result))
    )
  }

  getAlbumList(artistId: number): Observable<any> {
    const apiAlbumListURL = `https://itunes.apple.com/lookup?id=${artistId}&entity=album`;
    return this._http.get(apiAlbumListURL, {
      headers: {'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST'}
    }
    ).pipe(
      tap(result => console.log(result))
    )
  }
  getTrackList(artistId: number): Observable<any> {
    const apiTrackListURL = `https://itunes.apple.com/lookup?id=${artistId}&entity=song`;
    return this._http.get(apiTrackListURL, {
      headers: {'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST'}
    }
    ).pipe(
      tap(result => console.log(result))
    )
  }
}
