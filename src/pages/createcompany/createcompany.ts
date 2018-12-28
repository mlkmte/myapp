import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';

/**
 * Generated class for the CreatecompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createcompany',
  templateUrl: 'createcompany.html',
})
export class CreatecompanyPage {

  name:String;
  address:String;
  city:String;
  country:String;
  sector:String;
  website:String;
  userId: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private company: CompanyProvider,
    private toastCtrl: ToastController
  ) {
  }


  ionViewDidEnter() {

  }

  ionViewDidLoad() {
    this.company.getEmail().then(result => {
      this.getData(result);
    });
  }

  getData(email){
    this.company.getUserData(email).subscribe(res =>{
            this.userId = res.user._id;
        });
  }



  register(){
    this.company.createCompany(this.name, this.address, this.city, this.country, this.sector, this.website, this.userId)
    .subscribe(res => {

      if(res.message){
        let toast = this.toastCtrl.create({
          message: res.message,
          duration:3000,
          position:'bottom'
        });
        toast.present();
      }


      if(res.error){
        let alert = this.alertCtrl.create({
          title: 'Érreur lors de la validation du formulaire',
          subTitle: res.error,
          buttons: ['OK'] 
        });
        alert.present();
      }
    }); 

    this.name = '';
    this.address = '';
    this.city = '';
    this.country = '';
    this.sector = '';
    this.website = '';
  }

}
