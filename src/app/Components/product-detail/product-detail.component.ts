import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../Services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    constructor(
        private productService: ProductService,
    ) {
    }
    ngOnInit() : void {
        // this.productService.
    }

}
