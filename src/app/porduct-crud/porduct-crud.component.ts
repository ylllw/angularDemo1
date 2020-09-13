import { Component, OnInit } from '@angular/core';
import {Product} from '../porduct';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-porduct-crud',
  templateUrl: './porduct-crud.component.html',
  styleUrls: ['./porduct-crud.component.less']
})
export class PorductCRUDComponent implements OnInit {
  title="后台页面";

  porducts:Product[]=[];

  public currentPage:number=1;
  constructor(private productService:ProductService,private router:Router) { }
  ngOnInit(): void {
    this.productService.getProduct(this.currentPage).subscribe(porducts=>this.porducts=porducts);
  }
  deleteProduct(id:number):void{
    this.productService.deleteProduct(id).subscribe();
    this.productService.getProduct(this.currentPage).subscribe(porducts=>this.porducts=porducts);
  }

  nextPage():void{
    this.currentPage++;
    this.productService.getProduct(this.currentPage).subscribe(porducts=>this.porducts=porducts);
  }
  upPage():void{
   this.currentPage--;
   this.productService.getProduct(this.currentPage).subscribe(porducts=>this.porducts=porducts);
  }

}
