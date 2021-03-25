import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicDialogModule} from '../../../components/dynamicdialog/dynamicdialog';
import {ProductListDemo} from './productlistdemo';
import {DynamicDialogDemo} from './dynamicdialogdemo';
import {DynamicDialogDemoRoutingModule} from './dynamicdialogdemo-routing.module';
import {ToastModule} from 'primeng-11/toast';
import {TableModule} from 'primeng-11/table';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		DynamicDialogDemoRoutingModule,
		DynamicDialogModule,
		ToastModule,
		TableModule,
        ButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		DynamicDialogDemo,
		ProductListDemo
	],
	entryComponents: [
		ProductListDemo
	]
})
export class DynamicDialogDemoModule {}
