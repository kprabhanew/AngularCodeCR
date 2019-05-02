import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codecraft';
}

// constructor(route: ActivatedRoute) {
//   route.snapshot.params; // active route's params

//   route.snapshot.data; // active route's resolved data

//   route.snapshot.component; // active route's component

//   route.snapshot.queryParams // The query parameters shared by all the routes
// }