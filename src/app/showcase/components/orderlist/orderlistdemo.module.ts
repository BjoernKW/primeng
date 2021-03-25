import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListDemo} from './orderlistdemo';
import {OrderListDemoRoutingModule} from './orderlistdemo-routing.module';
import {OrderListModule} from 'primeng-11/orderlist';
import {TabViewModule} from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		OrderListDemoRoutingModule,
        OrderListModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		OrderListDemo
	]
})
export class OrderListDemoModule {}
