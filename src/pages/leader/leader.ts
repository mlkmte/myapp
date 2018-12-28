import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';


@IonicPage()
@Component({
  selector: 'page-leader',
  templateUrl: 'leader.html',
})
export class LeaderPage {

  companies = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider
    ) {
  }

  ionViewDidLoad() {
    this.company.leaderBoard()
      .subscribe(res => {
        console.log(res);
        this.companies = res.result; 
      });
  }

}
