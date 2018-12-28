import { NgModule } from '@angular/core';
import { NewratingComponent } from './newrating/newrating';
import { Ionic2RatingModule } from 'ionic2-rating';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [NewratingComponent],
	imports: [Ionic2RatingModule, FormsModule],
	exports: [NewratingComponent]
})

export class ComponentsModule {}
