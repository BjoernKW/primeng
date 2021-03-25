import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogDemo} from './dialogdemo';
import {DialogDemoRoutingModule} from './dialogdemo-routing.module';
import {DialogModule} from 'primeng-11/dialog';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		DialogDemoRoutingModule,
        DialogModule,
		ButtonModule,
		AppCodeModule,
        TabViewModule
	],
	declarations: [
		DialogDemo
	]
})
export class DialogDemoModule {}
