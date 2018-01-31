import { Component } from '@angular/core';
import { dirtyParentQueries } from '@angular/core/src/view/query';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login = false;
}
