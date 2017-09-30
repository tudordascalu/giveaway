import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.materializeInit();
  }

  materializeInit(){
    $('select').material_select();
    $('#textarea1').trigger('autoresize');
  }
}
