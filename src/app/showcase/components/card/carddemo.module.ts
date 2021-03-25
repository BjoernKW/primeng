import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardDemo} from './carddemo';
import {CardDemoRoutingModule} from './carddemo-routing.module';
import {CardModule} from 'primeng-11/card';
import {TabViewModule} from 'primeng-11/tabview';
import {ButtonModule} from 'primeng-11/button';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		CardDemoRoutingModule,
		CardModule,
		ButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		CardDemo
	]
})
export class CardDemoModule {}
