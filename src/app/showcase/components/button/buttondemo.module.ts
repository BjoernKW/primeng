import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDemo} from './buttondemo';
import {ButtonDemoRoutingModule} from './buttondemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {ProgressSpinnerModule} from 'primeng-11/progressspinner';
import {RippleModule} from 'primeng-11/ripple';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ButtonDemoRoutingModule,
        ButtonModule,
        TabViewModule,
		AppCodeModule,
        ProgressSpinnerModule,
        RippleModule
	],
	declarations: [
		ButtonDemo
	]
})
export class ButtonDemoModule {}
