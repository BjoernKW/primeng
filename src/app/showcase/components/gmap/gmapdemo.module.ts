import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GMapDemo} from './gmapdemo';
import {GMapDemoRoutingModule} from './gmapdemo-routing.module';
import {GMapModule} from 'primeng-11/gmap';
import {ToastModule} from 'primeng-11/toast';
import {CheckboxModule} from 'primeng-11/checkbox';
import {DialogModule} from 'primeng-11/dialog';
import {InputTextModule} from 'primeng-11/inputtext';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		GMapDemoRoutingModule,
        GMapModule,
        ToastModule,
        InputTextModule,
        CheckboxModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		GMapDemo
	]
})
export class GMapDemoModule {}
