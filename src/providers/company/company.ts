import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Storage } from '@ionic/storage';


@Injectable()
export class CompanyProvider {


  constructor(
    public http: HttpClient, 
    private storage: Storage,
  ) {
  }


  getUserData(email): Observable<any>{
    return this.http.get(`https://myrateapi.herokuapp.com/api/home/${email}`);
  }

  async getEmail(){
    return await this.storage.get('useremail');
  }

  createCompany(name, address, city, country, sector, website, userId?): Observable<any> {
    return this.http
      .post('https://myrateapi.herokuapp.com/api/company/create', {
        name,
        address,
        city,
        country,
        sector,
        website,
        userId
      });
  }

  getCompanies(): Observable<any>{
    return this.http
    .get('https://myrateapi.herokuapp.com/api/companies/all');
  }


  addCompanyReview(companyId, culture, benefits, balance, speed, overall, review, userId): Observable<any> {
    return this.http
      .post('https://myrateapi.herokuapp.com/api/company/review', {
        companyId,
        culture,
        benefits,
        balance,
        speed,
        overall,
        review,
        userId,
      });
  }

  registerEmployee(company, user, role): Observable<any>{
    return this.http
      .post('https://myrateapi.herokuapp.com/api/register/employee', {
        company,
        user,
        role
      });   
  }

  uploadImage(user, image): Observable<any>{
    return this.http
      .post('https://myrateapi.herokuapp.com/api/v1/profile/upload', {
        user,
        image
      });   
  }

  uploadLogo(id, image): Observable<any>{
    return this.http
      .post('https://myrateapi.herokuapp.com/api/v1/company/upload', {
        company: id,
        image: image
      });   
  }


  searchCompany(company): Observable<any>{
    return this.http
      .post('https://myrateapi.herokuapp.com/api/search-company/', {
        company
      });   
  }


  leaderBoard(): Observable<any>{
    return this.http
      .get('https://myrateapi.herokuapp.com/api/companies/leaderboard');   
  }
  

}
