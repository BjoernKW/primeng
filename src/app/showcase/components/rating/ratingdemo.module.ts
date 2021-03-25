import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {RatingDemo} from './ratingdemo';
import {RatingDemoRoutingModule} from './ratingdemo-routing.module';
import {RatingModule} from 'primeng-11/rating';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		RatingDemoRoutingModule,
        RatingModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		RatingDemo
	]
})
export class RatingDemoModule {}
