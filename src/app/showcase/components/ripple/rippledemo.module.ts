import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RippleDemo} from './rippledemo';
import {RippleDemoRoutingModule} from './rippledemo-routing.module';
import {RippleModule} from 'primeng-11/ripple';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		RippleDemoRoutingModule,
        RippleModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		RippleDemo
	]
})
export class RippleDemoModule {}
