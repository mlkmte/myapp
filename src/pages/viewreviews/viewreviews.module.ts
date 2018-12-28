import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewreviewsPage } from './viewreviews';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ViewreviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewreviewsPage),
    ComponentsModule
  ],
})
export class ViewreviewsPageModule {}
