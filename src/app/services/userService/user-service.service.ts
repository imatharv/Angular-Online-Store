import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private httpService: HttpServiceService ) { }

  url = environment.baseUrl

  login = (data: any) => {
    return this.httpService.post(`${this.url}bookstore_user/login`, data)
  }

  register = (data: any) => {
    return this.httpService.post(`${this.url}bookstore_user/registration`, data)
  }

  verify = (token: any) => {
    return this.httpService.post(`${this.url}bookstore_user/verification/${token}`)
  }

}
