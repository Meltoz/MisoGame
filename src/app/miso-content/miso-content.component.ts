import { Component } from '@angular/core';
import {NewsComponent} from "./news/news.component";
import {EntertainmentComponent} from "./entertainment/entertainment.component";
import {ReviewComponent} from "./review/review.component";
import {GamesComponent} from "./games/games.component";

@Component({
  selector: 'app-miso-content',
  standalone: true,
  imports: [
    NewsComponent,
    EntertainmentComponent,
    ReviewComponent,
    GamesComponent
  ],
  templateUrl: './miso-content.component.html',
})
export class MisoContentComponent {

}
