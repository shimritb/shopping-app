import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from './productModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // public product: ProductModel;
  @Input() product: ProductModel;

  onAddToCart() {
    return console.log('Added to cart!');
  }

  constructor() {
    // this.product = { ...product }; // ... is rest operator(destructor) to destruct the object and put its values into array
    // console.log(this.product.lastEdit);
  }

  ngOnInit() {
    this.product.lastEdit = this.product.lastEdit ? this.product.lastEdit : new Date().toISOString();
  }

}
