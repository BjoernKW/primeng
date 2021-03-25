import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayPanelDemo} from './overlaypaneldemo';
import {OverlayPanelDemoRoutingModule} from './overlaypaneldemo-routing.module';
import {OverlayPanelModule} from 'primeng-11/overlaypanel';
import {ButtonModule} from 'primeng-11/button';
import {TableModule} from 'primeng-11/table';
import {TabViewModule} from 'primeng-11/tabview';
import {ToastModule} from 'primeng-11/toast';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		OverlayPanelDemoRoutingModule,
        OverlayPanelModule,
        ButtonModule,
        TableModule,
		TabViewModule,
		AppCodeModule,
		ToastModule
	],
	declarations: [
		OverlayPanelDemo
	]
})
export class OverlayPanelDemoModule {}
