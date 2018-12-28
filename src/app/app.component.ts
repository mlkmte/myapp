import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { CompanyProvider } from '../providers/company/company';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit{
  @ViewChild(Nav) nav: Nav;

  rootPage: string;
  user: any;

  pages: any[];


  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private storage: Storage,
    private company: CompanyProvider
    ) {
    this.initializeApp();

    this.pages = [
      {title:'Accueil', component:'HomePage', icon: 'home'},
      {title:'Créer une entreprise', component:'CreatecompanyPage', icon: 'create'},      
      {title:'Liste des entreprises', component:'CompaniesPage', icon: 'list-box'},
      {title:'Recherche', component:'SearchPage', icon: 'search'},
      {title:'Classement', component:'LeaderPage', icon: 'archive'}
    ];
 
  }

  ngAfterViewInit() {}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.company.getEmail().then(result => {
        if(result === null){
          this.nav.setRoot("LoginPage");
        }
 
        if(result !== null){
          this.company.getUserData(result).subscribe(res => {
            this.user = res.user;
          });
          this.nav.setRoot("HomePage");
        }
      });

    });
  }

  openPage(page) {
    if(page.component === "HomePage"){
    this.nav.setRoot(page.component);
    }else{
    this.nav.push(page.component);
    }
  }

  logout(){
    this.storage.remove('useremail');
    this.nav.setRoot("LoginPage");
  }

  settings(){
    this.nav.push("SettingsPage");
  }


}
