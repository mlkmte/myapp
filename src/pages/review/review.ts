import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';


@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  culture: number;
  benefice: number;
  balance: number;
  speed: number;
  overall: number;
  review: string;
  userId:  any;

  companyProfile: any;
  name: string;

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider,  
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.companyProfile = this.navParams.get("data");
    this.name = this.companyProfile.companyname;
  }

  
  ionViewDidLoad() {
    this.company.getEmail().then(result => {
      this.getData(result);
    });
  }


  addReview(){
      this.company.addCompanyReview(this.companyProfile._id, this.culture, this.benefice, this.balance, this.speed, this.overall, this.review, this.userId)
      .subscribe(res =>{

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

      this.review = '';
  }

  getData(email){
    this.company.getUserData(email).subscribe(res => {
      //console.log(res.user);
      if(res.user!==null){
      this.userId = res.user._id;
      }
    })
  }

}
