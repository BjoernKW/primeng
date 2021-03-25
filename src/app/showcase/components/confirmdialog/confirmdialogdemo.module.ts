import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogDemo} from './confirmdialogdemo';
import {ConfirmDialogDemoRoutingModule} from './confirmdialogdemo-routing.module';
import {ConfirmDialogModule} from 'primeng-11/confirmdialog';
import {ButtonModule} from 'primeng-11/button';
import {ToastModule} from 'primeng-11/toast';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ConfirmDialogDemoRoutingModule,
        ConfirmDialogModule,
        ButtonModule,
        ToastModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		ConfirmDialogDemo
	]
})
export class ConfirmDialogDemoModule {}
