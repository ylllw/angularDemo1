import { Component, OnInit } from '@angular/core';
import {Product} from '../porduct';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.less']
})
export class ProductShowComponent implements OnInit {
  title='前端页面';
  product:Product[];
  selectName:string;
  currentPage:number=1;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct(this.currentPage).subscribe(product=>this.product=product);
  }

  selectByName(name:string):void{
    console.warn("selectByName:"+name)
    if(name==undefined||name=='')this.productService.getProduct(this.currentPage).subscribe(product=>this.product=product);
    else this.productService.getProductByName(name).subscribe(product=>this.product=product);
  }

}
