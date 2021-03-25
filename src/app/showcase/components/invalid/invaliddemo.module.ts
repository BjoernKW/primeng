import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvalidDemo } from './invaliddemo';
import { InvalidDemoRoutingModule } from './invaliddemo-routing.module';

import { ButtonModule } from 'primeng-11/button';
import { PanelModule } from 'primeng-11/panel';
import { TabViewModule } from 'primeng-11/tabview';
import { InputTextModule } from 'primeng-11/inputtext';
import { AutoCompleteModule } from 'primeng-11/autocomplete';
import { CalendarModule } from 'primeng-11/calendar';
import { ChipsModule } from 'primeng-11/chips';
import { InputMaskModule } from 'primeng-11/inputmask';
import { InputNumberModule } from 'primeng-11/inputnumber';
import { DropdownModule } from 'primeng-11/dropdown';
import { MultiSelectModule } from 'primeng-11/multiselect';
import { InputTextareaModule } from 'primeng-11/inputtextarea';

import { AppCodeModule } from '../../app.code.component';
import { AppInputStyleSwitchModule } from '../../app.inputstyleswitch.component';
import { CascadeSelectModule } from 'primeng-11/cascadeselect';

@NgModule({
	imports: [
		CommonModule,
		InvalidDemoRoutingModule,
		ButtonModule,
		CascadeSelectModule,
        PanelModule,
		TabViewModule,
		InputTextModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		InputMaskModule,
		InputNumberModule,
		DropdownModule,
		MultiSelectModule,
		InputTextareaModule,
		FormsModule,
		AppInputStyleSwitchModule,
        AppCodeModule
	],
	declarations: [
		InvalidDemo
	]
})
export class InvalidDemoModule {}
