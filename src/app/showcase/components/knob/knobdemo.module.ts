import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KnobDemo} from './knobdemo';
import {KnobDemoRoutingModule} from './knobdemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import {KnobModule} from 'primeng-11/knob';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		KnobDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		FormsModule,
		KnobModule,
		AppCodeModule
	],
	declarations: [
		KnobDemo
	]
})
export class KnobDemoModule {}
