import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PickListDemo} from './picklistdemo';
import {PickListDemoRoutingModule} from './picklistdemo-routing.module';
import {PickListModule} from 'primeng-11/picklist';
import {TabViewModule} from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PickListDemoRoutingModule,
        PickListModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		PickListDemo
	]
})
export class PickListDemoModule {}
