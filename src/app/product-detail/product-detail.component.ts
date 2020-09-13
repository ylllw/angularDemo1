import { Component, OnInit ,Input} from '@angular/core';
import {Product} from '../porduct';
import {ProductService} from '../product.service';
import {Router, ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {
   product:Product;
  constructor(private productService:ProductService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
   let id = this.route.snapshot.paramMap.get('id');

      this.productService.getProductById(Number(id)).subscribe(product=>this.product=product);
  }

}
