import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/components/layout/header/header.component";
import {MisoContentComponent} from "./miso-content/miso-content.component";
import {FooterComponent} from "./shared/components/layout/footer/footer.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MisoContentComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
