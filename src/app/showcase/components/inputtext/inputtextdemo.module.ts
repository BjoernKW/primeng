import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputTextDemo} from './inputtextdemo';
import {InputTextDemoRoutingModule} from './inputtextdemo-routing.module';
import {InputTextModule} from 'primeng-11/inputtext';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';

@NgModule({
	imports: [
		CommonModule,
		InputTextDemoRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
		TabViewModule,
		AppInputStyleSwitchModule,
        AppCodeModule
	],
	declarations: [
		InputTextDemo
	]
})
export class InputTextDemoModule {}
