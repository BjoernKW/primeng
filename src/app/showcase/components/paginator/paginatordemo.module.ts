import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorDemo} from './paginatordemo';
import {PaginatorDemoRoutingModule} from './paginatordemo-routing.module';
import {PaginatorModule} from 'primeng-11/paginator';
import {TabViewModule} from 'primeng-11/tabview';
import {ButtonModule} from 'primeng-11/button';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PaginatorDemoRoutingModule,
        PaginatorModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule
	],
	declarations: [
		PaginatorDemo
	]
})
export class PaginatorDemoModule {}
