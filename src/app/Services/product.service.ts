import {Injectable} from '@angular/core';
import {IProduct} from "../Data/DomainModels/Common/IProduct";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {AppendPathsToBaseUrl, BaseUrl, Host, Port, Protocol} from "../Configurations/Constants/common-constants";
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
      catchError(this.errorHandler.bind(this))
    )
  }

  create(product: IProduct): Observable<ExecuteResult<IProduct>> {
    let createdProduct = this.http.post<ExecuteResult<IProduct>>(
      AppendPathsToBaseUrl(['products', 'AddWithEmail']),
      product
    )
    // createdProduct.subscribe(x=> {
    //   debugger
    //   this.http.post(AppendPathsToBaseUrl(['ProductImage', 'AddDefaultImage']), {productId: x.data?.id})
    // })
    return createdProduct;
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

}

export class ProductsResult{
  public data: IProduct[]
}
