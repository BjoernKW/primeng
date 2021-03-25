import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DividerDemo} from './dividerdemo';
import {TagDemoRoutingModule} from './dividerdemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import {DividerModule} from 'primeng-11/divider';
import {InputTextModule} from 'primeng-11/inputtext';

@NgModule({
	imports: [
		CommonModule,
		TagDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		DividerModule,
		InputTextModule,
		AppCodeModule
	],
	declarations: [
		DividerDemo
	]
})
export class DividerDemoModule {}
