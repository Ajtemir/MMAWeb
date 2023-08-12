import { Component } from '@angular/core';
import {ProductService} from "../../Services/product.service";
import {ModalService} from "../../Services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  title: string = 'MMAWeb'
  // products: IProduct[] = data
  // products: IProduct[] = []
  loading: boolean = false
  // products$: Observable<ProductsResult>
  term = ''

  constructor(
    public productService : ProductService,
    public modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productService.getAll().subscribe(products => {
      this.loading = false
    })
  }

}
