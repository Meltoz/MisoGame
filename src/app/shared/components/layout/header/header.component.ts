import {ChangeDetectionStrategy, Component} from '@angular/core';
import {menuItems} from "../../../../core/constants";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  protected readonly menuItems = menuItems;
}
