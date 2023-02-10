import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

items : Item[]= [
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

  constructor() {}

  getItems() {


    return this.items;
  }

  addItem(item:Item){
//unshift: adds the element at the beginning
this.items.unshift(item);
  }
}
