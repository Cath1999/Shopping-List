import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  total : number = 0;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      // first object
      {
        id: 0,
        title: 'apple',
        price: 10.4,
        quantity: 4,
        completed: false,
      },
      // second object
      {
        id: 1,
        title: 'bread',
        price: 3.5,
        quantity: 8,
        completed: true,
      },
      // third object
      {
        id: 2,
        title: 'blouse',
        price: 300,
        quantity: 2,
        completed: false,
      },

    ];

    this.getTotal();
  }

  deleteItem(item:Item){
this.items = this.items.filter(x => x.id !== item.id )
//on delete update total
this.getTotal();
  }


 toggleItem(item:Item){
this.getTotal();
  }

  getTotal(){
    this.total = this.items
    .filter( item => !item.completed)
    .map(item => item.quantity * item.price)
    .reduce((acc,item)=> acc += item,0);

  }

}
