import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastDemo} from './toastdemo';
import {ToastDemoRoutingModule} from './toastdemo-routing.module';
import {ToastModule} from 'primeng-11/toast';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {RippleModule} from 'primeng-11/ripple';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ToastDemoRoutingModule,
        ToastModule,
        ButtonModule,
        TabViewModule,
        RippleModule,
        AppCodeModule
	],
	declarations: [
		ToastDemo
	]
})
export class ToastDemoModule {}
