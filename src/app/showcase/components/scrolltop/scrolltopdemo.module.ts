import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollTopDemo} from './scrolltopdemo';
import {ScrollTopDemoRoutingModule} from './scrolltopdemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import {TableModule} from 'primeng-11/table';
import {ScrollTopModule} from 'primeng-11/scrolltop';
import {ScrollPanelModule} from 'primeng-11/scrollpanel';

@NgModule({
	imports: [
		CommonModule,
		ScrollTopDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		ScrollTopModule,
		ScrollPanelModule,
		TableModule,
		AppCodeModule
	],
	declarations: [
		ScrollTopDemo
	]
})
export class ScrollTopDemoModule {}
