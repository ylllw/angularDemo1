import { Component, OnInit  } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../porduct';
import {FormGroup,FormControl} from '@angular/forms';
import {FormBuilder,Validators,FormsModule} from '@angular/forms';
import {Router, ActivatedRoute,ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.less']
})
export class ProductUpdateFormComponent implements OnInit {
  title='修改';

  pro:Product;
  constructor(private fb:FormBuilder,private productService:ProductService,private route:ActivatedRoute,private router:Router) { }
  selectedId: number;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id)).subscribe(pro=>this.pro=pro);
  }

 productForm = this.fb.group({
    id :  [''],
    productName : ['', Validators.required],
    productDate : ['', Validators.required],
    factory : ['', Validators.required],
    productionType : ['', Validators.required],
    price : ['', Validators.required],
    remark : [''],
    logoImg : ['']
  });
  onSubmit():void{
    this.productService.updateProduct(this.productForm.value).subscribe();
  }
}
