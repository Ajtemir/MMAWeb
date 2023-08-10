import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../Services/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(private productService: ProductService) {
  }

  form = new FormGroup(
    {
      title: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(6),
      ]),

    }
  )

  get title()  {
    return this.form.controls.title as FormControl
  }



  submit(): void {
    this.productService.create({
      title : this.form.value.title as string,
      description : '',
      price : 1,
      categoryId : 1,
      createDate: new Date(),
      images: [''],
      userId: '',
    })
  }
}
