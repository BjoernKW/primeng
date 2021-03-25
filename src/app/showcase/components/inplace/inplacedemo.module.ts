import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InplaceDemo} from './inplacedemo';
import {InplaceDemoRoutingModule} from './inplacedemo-routing.module';
import {InplaceModule} from 'primeng-11/inplace';
import {InputTextModule} from 'primeng-11/inputtext';
import {TableModule} from 'primeng-11/table';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		InplaceDemoRoutingModule,
        InplaceModule,
        InputTextModule,
        TableModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		InplaceDemo
	]
})
export class InplaceDemoModule {}
