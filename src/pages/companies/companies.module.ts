import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompaniesPage } from './companies';
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    CompaniesPage,
  ],
  imports: [
    IonicPageModule.forChild(CompaniesPage),
    Ionic2RatingModule
  ],
})
export class CompaniesPageModule {}
