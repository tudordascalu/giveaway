import { Component, OnInit } from '@angular/core';
import { ItemComponent } from './item/item.component';
// import * as $ from 'jquery';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  category: number = 1;
  zoomedIn = false;
  zoomedItem: any;
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
     },
     {
      'imageURL': './assets/images/carousel/carousel-4.jpg',
      'title': 'Lamp',
      'body': 'This item is a very nice bed I used since I was little',
      'category': 3
     },
     {
      'imageURL': './assets/images/carousel/carousel-5.jpg',
      'title': 'Speakers',
      'body': 'This item is a very nice bed I used since I was little',
      'category': 3
     }];
  constructor() { }

  ngOnInit() {
  }

  zoomIn(item: any) {
    this.zoomedItem = item;
    this.zoomedIn = true;
  }

}
