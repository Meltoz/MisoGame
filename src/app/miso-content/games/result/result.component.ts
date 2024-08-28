import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
})
export class ResultComponent {
  protected games = [{
    title: "senua's sage: hellbalde ii",
    release: 'released on may 21, 2024',
    img: 'senua'
  }, {
    title: 'prince of persia: the lost crown',
    release: 'released on januray 18, 2024',
    img: 'prince'
  }, {
    title: 'rise of the ronin',
    release: 'released on march 22, 2024',
    img: 'rotr'
  }, {
    title: 'meltal gear solid delta',
    release: 'anticipated for 2024',
    img: 'metalgear'
  }, {
    title:'sega persona 3 reload',
    release: 'released on february 2, 2024',
    img: 'segaPersona'
  }, {
    title:"dragon's dogma 2",
    release: 'released on march 21, 2024',
    img: 'dragonsDogma'
  }]
}
