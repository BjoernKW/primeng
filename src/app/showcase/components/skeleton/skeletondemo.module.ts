import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkeletonDemo} from './skeletondemo';
import {SkeletonDemoRoutingModule} from './skeletondemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import {SkeletonModule} from 'primeng-11/skeleton';
import {TableModule} from 'primeng-11/table';

@NgModule({
	imports: [
		CommonModule,
		SkeletonDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		SkeletonModule,
		TableModule,
		AppCodeModule
	],
	declarations: [
		SkeletonDemo
	]
})
export class SkeletonDemoModule {}
