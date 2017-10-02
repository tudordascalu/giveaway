import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../../items/item/item.component';

@Component({
  selector: 'app-queue-items',
  templateUrl: './queue-items.component.html',
  styleUrls: ['./queue-items.component.scss']
})
export class QueueItemsComponent implements OnInit {
  items = [
    {
     'imageURL': './assets/images/carousel/carousel-1.jpg',
     'title': 'Bed',
     'body': 'This item is a very nice bed I used since I was little',
     'category': 2
    },
    {
      'imageURL': './assets/images/carousel/carousel-2.jpg',
      'title': 'Drawer',
      'body': 'This item is a very nice bed I used since I was little',
      'category': 2
     },
     {
      'imageURL': './assets/images/carousel/carousel-3.jpg',
      'title': 'Clothes',
      'body': 'This item is a very nice bed I used since I was little',
      'category': 4
     }];
  constructor() { }

  ngOnInit() {
  }

}
