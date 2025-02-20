import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputGroupDemo} from './inputgroupdemo';
import {InputGroupDemoRoutingModule} from './inputgroupdemo-routing.module';
import {InputTextModule} from 'primeng-11/inputtext';
import {CheckboxModule} from 'primeng-11/checkbox';
import {RadioButtonModule} from 'primeng-11/radiobutton';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {RippleModule} from 'primeng-11/ripple';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		InputGroupDemoRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        RippleModule,
        TabViewModule,
        AppInputStyleSwitchModule,
        AppCodeModule
	],
	declarations: [
		InputGroupDemo
	]
})
export class InputGroupDemoModule {}
