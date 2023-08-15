import {Component, Input} from '@angular/core';
import {IProduct} from "../../Data/DomainModels/Common/IProduct";
import {AppendPathsToBaseUrl} from "../../Configurations/Constants/common-constants";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    constructor(public router: Router) {
    }
    @Input() product: IProduct
    details: boolean = false
    protected readonly AppendPathsToBaseUrl = AppendPathsToBaseUrl;
}
