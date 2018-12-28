import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  companyname: string;

  searchResults = [];
  showList = true;
  showResults = [];
  results = false;
  noResults = false;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchCompany(){
    this.showList = true;
    this.company.searchCompany(this.companyname)
    .subscribe(res => {
      //console.log(res); 
      if(res.results.length > 0){
        this.results = true;
        this.noResults = false;
        this.showResults = res.results;
        this.searchResults = res.results;
      }else{
        this.results = false;
        this.noResults = true;
        this.showResults = res.results;
        this.searchResults = [{"companyname": "Pas de résultat"}];
      }
    }); 
  }


  onCancel($event){
    this.showList = false;
  }

  onClear($event){
    this.showList = false;
  }


  companyProfile(company){
    this.showList = false;
    this.companyname = '';    
    this.navCtrl.push("CompanyprofilePage",{data: company});
  } 

}
