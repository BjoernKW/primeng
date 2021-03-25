import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PasswordDemo} from './passworddemo';
import {PasswordDemoRoutingModule} from './passworddemo-routing.module';
import {PasswordModule} from 'primeng-11/password';
import {TabViewModule} from 'primeng-11/tabview';
import {DividerModule} from 'primeng-11/divider';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PasswordDemoRoutingModule,
        PasswordModule,
		DividerModule,
		TabViewModule,
		FormsModule,
		AppInputStyleSwitchModule,
		AppCodeModule
	],
	declarations: [
		PasswordDemo
	]
})
export class PasswordDemoModule {}
