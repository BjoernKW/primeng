import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeferDemo} from './deferdemo';
import {DeferDemoRoutingModule} from './deferdemo-routing.module';
import {DeferModule} from 'primeng-11/defer';
import {TableModule} from 'primeng-11/table';
import {ToastModule} from 'primeng-11/toast';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		DeferDemoRoutingModule,
        DeferModule,
        ToastModule,
        TabViewModule,
        TableModule,
        AppCodeModule
	],
	declarations: [
		DeferDemo
	]
})
export class DeferDemoModule {}
