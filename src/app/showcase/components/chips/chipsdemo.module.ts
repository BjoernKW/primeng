import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChipsDemo} from './chipsdemo';
import {ChipsDemoRoutingModule} from './chipsdemo-routing.module';
import {ChipsModule} from 'primeng-11/chips';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ChipsDemoRoutingModule,
        ChipsModule,
        ButtonModule,
		TabViewModule,
		AppInputStyleSwitchModule,
		AppCodeModule
	],
	declarations: [
		ChipsDemo
	]
})
export class ChipsDemoModule {}
