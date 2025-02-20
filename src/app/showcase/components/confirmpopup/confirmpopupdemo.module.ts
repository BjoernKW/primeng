import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmPopupDemo} from './confirmpopupdemo';
import {ConfirmPopupDemoRoutingModule} from './confirmpopupdemo-routing.module';
import {ConfirmPopupModule} from 'primeng-11/confirmpopup';
import {ToastModule} from 'primeng-11/toast';
import {ButtonModule} from 'primeng-11/button';
import {MessagesModule} from 'primeng-11/messages';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ConfirmPopupDemoRoutingModule,
        ConfirmPopupModule,
        ButtonModule,
		MessagesModule,
		ToastModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		ConfirmPopupDemo
	]
})
export class ConfirmPopupDemoModule {}
