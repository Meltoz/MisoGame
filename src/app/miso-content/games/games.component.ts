import { Component } from '@angular/core';
import {FilterComponent} from "./filter/filter.component";
import {ResultComponent} from "./result/result.component";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    FilterComponent,
    ResultComponent
  ],
  templateUrl: './games.component.html'
})
export class GamesComponent {

}
