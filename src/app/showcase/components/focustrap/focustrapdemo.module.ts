import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng-11/dialog';
import { InputTextModule } from 'primeng-11/inputtext';
import { ButtonModule } from 'primeng-11/button';
import { AccordionModule } from 'primeng-11/accordion';
import { TabViewModule } from 'primeng-11/tabview';
import { FocusTrapDemoRoutingModule } from './focustrapdemo-routing.module';
import { FocusTrapDemo } from './focustrapdemo';
import { AutoCompleteModule } from 'primeng-11/autocomplete';
import { CalendarModule } from 'primeng-11/calendar';
import { MultiSelectModule } from 'primeng-11/multiselect';
import { DropdownModule } from 'primeng-11/dropdown';
import { EditorModule } from 'primeng-11/editor';
import { FocusTrapModule } from 'primeng-11/focustrap';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FocusTrapDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        AppCodeModule,
        FocusTrapModule,
		AutoCompleteModule,
		CalendarModule,
		MultiSelectModule,
		DropdownModule,
		EditorModule
	],
	declarations: [
		FocusTrapDemo
	]
})
export class FocusTrapDemoModule {}
