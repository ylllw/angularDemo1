import { Injectable } from '@angular/core';
import {Product} from './porduct';
import {PORDUCTS} from './mock-porduct';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError,of} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
const Options={
  headers : new HttpHeaders({'Content-Type': "application/json"})
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl="http://localhost:9999";

  constructor(private http:HttpClient) { }


  getProduct(currentPage:number):Observable<Product[]>{
    console.warn("currentPage"+currentPage);
    return this.http.get<Product[]> (this.productUrl+"/query/"+currentPage);
  }
  addProduct(product:Product):Observable<Product>{

      return this.http.post<Product>(
        this.productUrl+'/add',product,Options).pipe(


        );
  }
  getProductById(id:number):Observable<Product>{
    console.warn("id:"+id);
    return this.http.get<Product>(this.productUrl+'/getById/'+id);
  }
  getProductByName(name:string):Observable<Product[]>{
      console.warn("name:"+name);

      return this.http.get<Product[]>(this.productUrl+'/getByName/'+name);
    }
  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(
      this.productUrl+'/update',product,Options).pipe(

      );
  }
  deleteProduct(id:number):Observable<{}>{
    return this.http.delete(
      this.productUrl+'/delete/'+id,Options).pipe(

    );
  }
}
