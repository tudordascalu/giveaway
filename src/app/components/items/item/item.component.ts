import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() imageURL: string = './assets/images/carousel/carousel-1.jpg';
  @Input() title: string = 'Bed';
  @Input() status = 0;
  @Input() body: string = 'This item is a very nice bed I used since I was little';
  @Input() address: string = 'Don t know';

  @Output() zoom: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  zoomIn(){
    this.zoom.emit(true);
  }
}
