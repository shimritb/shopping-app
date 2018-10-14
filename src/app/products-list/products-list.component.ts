import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product/productModel';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  //  productsList: ProductModel[] = [
  //   new ProductModel
  // ];
  products: ProductModel[];

  constructor() {
    console.log('reached here !!!');
    this.products = [
      {
        name: 'calculator',
        price: 5,
        imagePath: ' some path',
        lastEdit: '2018-12-13'
      },
      {
        name: 'calculator_2',
        price: 10,
        imagePath: ' some path',
        lastEdit: '2018-12-13'
      },
      {
        name: 'calculator_3',
        price: 15,
        imagePath: ' some path',
        lastEdit: ''
      },
      {
        name: 'calculator_3',
        price: 20,
        imagePath: ' some path',
        lastEdit: ''
      }

    ];
     console.log(this.products);
  }

  ngOnInit() {
  }

}
