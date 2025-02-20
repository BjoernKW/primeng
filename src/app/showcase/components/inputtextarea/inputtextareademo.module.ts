import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextareaDemo} from './inputtextareademo';
import {InputTextareaDemoRoutingModule} from './inputtextareademo-routing.module';
import {InputTextareaModule} from 'primeng-11/inputtextarea';
import {TabViewModule} from 'primeng-11/tabview';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		InputTextareaDemoRoutingModule,
        InputTextareaModule,
		TabViewModule,
		AppInputStyleSwitchModule,
		AppCodeModule
	],
	declarations: [
		InputTextareaDemo
	]
})
export class InputTextareaDemoModule {}
