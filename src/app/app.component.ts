import {Component, OnInit} from '@angular/core';
import {IProduct} from "./Data/DomainModels/Common/IProduct";
import {products, products as data} from "./Data/DomainModels/Temp/TempData";
import {ProductService, ProductsResult} from "./Services/product.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "./Services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'MMAWeb'
  // products: IProduct[] = data
  // products: IProduct[] = []
  loading: boolean = false
  products$: Observable<ProductsResult>
  term = ''

  constructor(
    private productService : ProductService,
    public modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productService.getAll().subscribe(products => {
    //   this.products = products.data
    //   this.loading = false
    // })
  }
}
