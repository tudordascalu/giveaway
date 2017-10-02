import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../../items/item/item.component';

@Component({
  selector: 'app-approved-items',
  templateUrl: './approved-items.component.html',
  styleUrls: ['./approved-items.component.scss']
})
export class ApprovedItemsComponent implements OnInit {
  items = [
    {
     'imageURL': './assets/images/carousel/carousel-1.jpg',
     'title': 'Bed',
     'body': 'This item is a very nice bed I used since I was little',
     'category': 2,
     'owner': {
       'address': 'Copenhagen, Mjolneparken 108, 1-3, 2200'
     }
    },
    {
      'imageURL': './assets/images/carousel/carousel-2.jpg',
      'title': 'Drawer',
      'body': 'This item is a very nice bed I used since I was little',
      'category': 2,
      'owner': {
        'address': 'Copenhagen, Mjolneparken 108, 1-3, 2200'
      }
     }];
  constructor() { }

  ngOnInit() {
  }

}
