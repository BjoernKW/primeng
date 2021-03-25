import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitterDemo} from './splitterdemo';
import {SplitterDemoRoutingModule} from './splitterdemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import { SplitterModule } from 'primeng-11/splitter';

@NgModule({
	imports: [
		CommonModule,
		SplitterDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		SplitterModule,
		AppCodeModule
	],
	declarations: [
		SplitterDemo
	]
})
export class SplitterDemoModule {}
