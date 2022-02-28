import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpTableServiceService {

  url = 'https://localhost:44316/api/product/getall';

  constructor(private http : HttpClient){ }

    getProducts()
    {
     return this.http.get(this.url); 
     
     
    }  



  }
  
