import { Component } from '@angular/core';
import {NewsComponent} from "./news/news.component";

@Component({
  selector: 'app-miso-content',
  standalone: true,
  imports: [
    NewsComponent
  ],
  templateUrl: './miso-content.component.html',
})
export class MisoContentComponent {

}
