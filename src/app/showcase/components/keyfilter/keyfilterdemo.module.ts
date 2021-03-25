import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyFilterDemo} from './keyfilterdemo';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng-11/message';
import {KeyFilterDemoRoutingModule} from './keyfilterdemo-routing.module';
import {KeyFilterModule} from 'primeng-11/keyfilter';
import {InputTextModule} from 'primeng-11/inputtext';
import {TabViewModule} from 'primeng-11/tabview';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		KeyFilterDemoRoutingModule,
		KeyFilterModule,
		InputTextModule,
		MessageModule,
		TabViewModule,
		AppInputStyleSwitchModule,
		AppCodeModule
	],
	declarations: [
		KeyFilterDemo
	]
})
export class KeyFilterDemoModule {}
