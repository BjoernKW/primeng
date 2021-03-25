import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FullCalendarDemo} from './fullcalendardemo';
import {FullCalendarDemoRoutingModule} from './fullcalendardemo-routing.module';
import {FullCalendarModule} from 'primeng-11/fullcalendar';
import {DialogModule} from 'primeng-11/dialog';
import {InputTextModule} from 'primeng-11/inputtext';
import {CalendarModule} from 'primeng-11/calendar';
import {CheckboxModule} from 'primeng-11/checkbox';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		FullCalendarDemoRoutingModule,
        FullCalendarModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        CheckboxModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		FullCalendarDemo
	]
})
export class FullCalendarDemoModule {}
