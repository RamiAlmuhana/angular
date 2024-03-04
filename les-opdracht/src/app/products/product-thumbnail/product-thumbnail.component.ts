import { Component } from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.scss'
})
export class ProductThumbnailComponent {
  public product: Product = new Product("Hoera je moeder", 99.95);
}
