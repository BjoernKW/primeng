import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineDemo} from './timelinedemo';
import {TimelineDemoRoutingModule} from './timelinedemo-routing.module';
import {TimelineModule} from 'primeng-11/timeline';
import {CardModule} from 'primeng-11/card';
import {ButtonModule} from 'primeng-11/button';
import {SplitButtonModule} from 'primeng-11/splitbutton';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		TimelineDemoRoutingModule,
		TimelineModule,
		CardModule,
        ButtonModule,
        SplitButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		TimelineDemo
	]
})
export class TimelineDemoModule {}
