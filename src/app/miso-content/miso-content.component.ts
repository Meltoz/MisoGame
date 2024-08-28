import { Component } from '@angular/core';
import {NewsComponent} from "./news/news.component";
import {EntertainmentComponent} from "./entertainment/entertainment.component";
import {ReviewComponent} from "./review/review.component";

@Component({
  selector: 'app-miso-content',
  standalone: true,
  imports: [
    NewsComponent,
    EntertainmentComponent,
    ReviewComponent
  ],
  templateUrl: './miso-content.component.html',
})
export class MisoContentComponent {

}
