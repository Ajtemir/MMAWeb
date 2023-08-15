import {Injectable} from '@angular/core';
import {IProduct} from "../Data/DomainModels/Common/IProduct";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {AppendPathsToBaseUrl} from "../Configurations/Constants/common-constants";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {ExecuteResult} from "../Data/DomainModels/Common/ExecuteResult";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ) {}

  products: IProduct[] = []

  getAll() : Observable<ProductsResult>{
    let currentUrl: string = AppendPathsToBaseUrl(['products', 'index'])
    return this.http.get<ProductsResult>(currentUrl, {
      params: new HttpParams(
        {
          // fromObject : {limit: 5}
        })
    })
      .pipe(
      delay(200),
      retry(2),
      tap(products => this.products = products.data),
      catchError(this.errorHandler.bind(this))
    )
  }

  getProductId(productId: number) : Observable<ExecuteResult<IProduct>> {
      let product: Observable<ExecuteResult<IProduct>> = this.http.get<ExecuteResult<IProduct>>(AppendPathsToBaseUrl(['Products', 'GetById']), {
          params:{
              productId: productId,
          }
      })
      return product
  }

  create(product: IProduct): Observable<ExecuteResult<IProduct>> {


    return this.http.post<ExecuteResult<IProduct>>(
      AppendPathsToBaseUrl(['products', 'AddWithEmail']),
      product
    ).pipe(
      tap(prod => {
        let a = this.http.post(
          AppendPathsToBaseUrl(["ProductImage", "AddDefaultImage"]),
          null,
          {
            params: new HttpParams().append(
              'productId', prod.data?.id!
            )
          }
        ).subscribe(

        )
        this.products.push(prod.data!)
      })
    )
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

}

export class ProductsResult{
  public data: IProduct[]
}
