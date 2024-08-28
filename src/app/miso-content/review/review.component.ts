import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
})
export class ReviewComponent {

  protected reviews = [
    {
      title: "Meltoz's Anticipation for Black Myth: Wukong's Upcoming Release 05:55",
      img: "img/reviews/meltozWukong.png"
    }, {
      title: "XDefiant: Ubisoft's Ambitious New Shooter 01:59",
      img: "img/reviews/XDefiant.png"
    }, {
      title: "Concord: Bringin the Cosmos to Your Console 01:36",
      img: 'img/reviews/concord.png'
    },{
    title: 'Dofus Unity Beta: A New Chapter for the MMO',
      img: 'img/reviews/dofus.png'
    }
  ]
}
