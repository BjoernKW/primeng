import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {AutoCompleteDemo} from './autocompletedemo';
import {AutoCompleteDemoRoutingModule} from './autocompletedemo-routing.module';
import {AutoCompleteModule} from 'primeng-11/autocomplete';
import {TabViewModule} from 'primeng-11/tabview';
import { AppInputStyleSwitchModule } from '../../app.inputstyleswitch.component';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		AutoCompleteDemoRoutingModule,
        AutoCompleteModule,
		TabViewModule,
		AppInputStyleSwitchModule,
		AppCodeModule
	],
	declarations: [
		AutoCompleteDemo
	]
})
export class AutoCompleteDemoModule {}
