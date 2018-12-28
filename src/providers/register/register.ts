import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';


@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegisterProvider Provider');
  }

  registerUser(fullname, email, password):Observable<any>{
    return this.http
    .post('https://myrateapi.herokuapp.com/api/signup/user',{
      fullname: fullname,
      email: email,
      password: password
    })
  }




  loginUser(email, password):Observable<any>{
    return this.http
    .post('https://myrateapi.herokuapp.com/api/login/user',{
      email: email,
      password: password
    })
  }


}
