import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
})
export class FilterComponent {

  protected categories = ['action', 'aventure', 'casual', 'rpg', 'stratégie', 'mmorpg'];
}
