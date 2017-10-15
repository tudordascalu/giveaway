import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zoom-item',
  templateUrl: './zoom-item.component.html',
  styleUrls: ['./zoom-item.component.scss']
})
export class ZoomItemComponent implements OnInit {
 
  @Input() item: any;
 
  constructor() { }

  ngOnInit() {
    console.log(this.item);
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }

}
