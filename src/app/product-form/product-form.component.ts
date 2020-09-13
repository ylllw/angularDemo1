import { Component, OnInit,Input } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {FormBuilder,Validators,FormsModule} from '@angular/forms';
import {ProductService} from '../product.service';
import {Product} from '../porduct';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})
export class ProductFormComponent implements OnInit {
  title='添加';
  constructor(private fb:FormBuilder,private productService:ProductService,public _d:DomSanitizer ) { }
  imgsrc="";
  fileChange(e){
    const file = e.srcElement.files[0]; // 获取图片这里只操作一张图片
        this.imgsrc = window.URL.createObjectURL(file); // 获取上传的图片临时路径
  }

  ngOnInit(): void {

  }
  productForm = this.fb.group({
    id :  [''],
    productName : ['', Validators.required],
    productDate : [''],
    factory : [''],
    productionType : [''],
    price : [''],
    remark : [''],
    logoImg : ['']
  });
  onSubmit():void{

    this.productService.addProduct(this.productForm.value).subscribe();

  }
}
