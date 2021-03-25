import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelMenuDemo} from './panelmenudemo';
import {PanelMenuDemoRoutingModule} from './panelmenudemo-routing.module';
import {PanelMenuModule} from 'primeng-11/panelmenu';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PanelMenuDemoRoutingModule,
        PanelMenuModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		PanelMenuDemo
	]
})
export class PanelMenuDemoModule {}
