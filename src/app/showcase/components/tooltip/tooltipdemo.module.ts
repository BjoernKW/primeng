import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDemo} from './tooltipdemo';
import {TooltipDemoRoutingModule} from './tooltipdemo-routing.module';
import {TooltipModule} from 'primeng-11/tooltip';
import {InputTextModule} from 'primeng-11/inputtext';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import {ButtonModule} from 'primeng-11/button';
import {RippleModule} from 'primeng-11/ripple';

@NgModule({
	imports: [
		CommonModule,
		TooltipDemoRoutingModule,
        TooltipModule,
        InputTextModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule,
		RippleModule
	],
	declarations: [
		TooltipDemo
	]
})
export class TooltipDemoModule {}
