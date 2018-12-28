import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider
    ) {
  }

  ionViewDidLoad() {
    this.company.getEmail().then(result => {
      this.getData(result);
    });
  }

  getData(email){
    this.company.getUserData(email).subscribe(res =>{
          this.user = res.user;
        });
  }

  openPage(){
    this.navCtrl.push("CreatecompanyPage");
  }

  reviewPage(){
    this.navCtrl.push("ReviewPage");
  }

  goToSearch(){
    this.navCtrl.push("SearchPage");    
  }
 
  addCompany(){
    this.navCtrl.push("CreatecompanyPage");    
  }
  
}
