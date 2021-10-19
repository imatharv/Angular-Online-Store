import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private httpService: HttpServiceService ) { }

  url = environment.baseUrl

  getProducts = () => {
    return this.httpService.get(`${this.url}bookstore_user/get/book`)
  }




}
