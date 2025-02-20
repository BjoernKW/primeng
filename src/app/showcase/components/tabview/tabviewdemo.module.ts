import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabViewDemo} from './tabviewdemo';
import {TabViewDemoRoutingModule} from './tabviewdemo-routing.module';
import {TabViewModule} from 'primeng-11/tabview';
import {ButtonModule} from 'primeng-11/button';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		TabViewDemoRoutingModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule
	],
	declarations: [
		TabViewDemo
	]
})
export class TabViewDemoModule {}
