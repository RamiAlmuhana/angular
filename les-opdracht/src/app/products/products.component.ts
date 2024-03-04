import { Component } from '@angular/core';
import {ProductThumbnailComponent} from "./product-thumbnail/product-thumbnail.component";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductThumbnailComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private productService: ProductsService) {
    this.productService.sayHi();
  }

}
