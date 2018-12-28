import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import * as _ from 'lodash';
import { CompanyProvider } from '../../providers/company/company';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@IonicPage()
@Component({
  selector: 'page-companyprofile',
  templateUrl: 'companyprofile.html',
})
export class CompanyprofilePage {

  profile: any;
  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private company: CompanyProvider,
    private toastCtrl: ToastController
    ) {
    this.profile = this.navParams.get("data");

    console.log(this.profile);
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

  viewReviews(profile){
    this.navCtrl.push("ViewreviewsPage", {"data": profile});
  }

  
  reviewPage(profile){
    this.navCtrl.push("ReviewPage", {"data": profile});
  }


  averageRating(arr){
    if(arr.lenght < 0){
      return 0;
    }else{
      return this.roundValue(_.mean(arr));
    }
  }

  roundValue(value){
    const factor = Math.pow(10,1);
    return Math.round(value*factor) / factor;
  }

  ratingSomme(arr){
    if(arr.lenght < 0){
      return 0;
    }else{
      return _.sum(arr);
    }
  }

  employeeRegister(profile){
    let alert = this.alertCtrl.create({
      title: 'Ajouter un employé',
      inputs: [
        {
          name: 'role',
          placeholder: 'Add Role'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Ajouter',
          role: 'cancel',
          cssClass: 'alertCss',
          handler: data => {
            this.company.registerEmployee(this.profile,this.user,data.role)
              .subscribe(res => {
                if(res.message){
                  let toast = this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: "bottom"
                  });
                  toast.present();
                }
              })
          }
        },        
      ]
    });
    alert.present();
  }

}
