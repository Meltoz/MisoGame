import {ChangeDetectionStrategy, Component} from '@angular/core';
import { menuItems } from '../../../../core/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  protected readonly menuItems = menuItems;

  protected readonly rs =['fb', 'ig', 'tiktok', 'yb'];
}
