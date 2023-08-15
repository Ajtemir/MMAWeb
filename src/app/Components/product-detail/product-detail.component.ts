import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../Services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {ExecuteResult} from "../../Data/DomainModels/Common/ExecuteResult";
import {IProduct} from "../../Data/DomainModels/Common/IProduct";
import {products} from "../../Data/DomainModels/Temp/TempData";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    productId: number
    product: Observable<ExecuteResult<IProduct>>

    constructor(
        private productService: ProductService,
        private router: ActivatedRoute,
    ) {
    }
    ngOnInit() : void {
        this.router.queryParams.subscribe(x=> this.productId = x.productId)
        this.product = this.productService.getProductId(this.productId)
    }

}
