import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-11/button';;
import { TabViewModule } from 'primeng-11/tabview';
import { FilterServiceDemo } from './filterservicedemo';
import { FilterServiceDemoRoutingModule } from './filterservice-routing.module';
import { AutoCompleteModule } from 'primeng-11/autocomplete';
import { TableModule } from 'primeng-11/table';
import { InputTextModule } from 'primeng-11/inputtext';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FilterServiceDemoRoutingModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule,
		AutoCompleteModule,
		FormsModule,
		TableModule,
		InputTextModule
	],
	declarations: [
		FilterServiceDemo
	]
})
export class FilterServiceDemoModule {}
