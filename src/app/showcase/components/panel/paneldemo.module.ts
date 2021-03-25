import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelDemo} from './paneldemo';
import {PanelDemoRoutingModule} from './paneldemo-routing.module';
import {PanelModule} from 'primeng-11/panel';
import {ToastModule} from 'primeng-11/toast';
import { MenuModule } from 'primeng-11/menu';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PanelDemoRoutingModule,
        PanelModule,
        ToastModule,
		TabViewModule,
		AppCodeModule,
		MenuModule
	],
	declarations: [
		PanelDemo
	]
})
export class PanelDemoModule {}
