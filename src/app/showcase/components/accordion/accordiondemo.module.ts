import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionDemo} from './accordiondemo';
import {AccordionDemoRoutingModule} from './accordiondemo-routing.module';
import {AccordionModule} from 'primeng-11/accordion';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {ToastModule} from 'primeng-11/toast';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		AccordionDemoRoutingModule,
        AccordionModule,
        ButtonModule,
        TabViewModule,
		ToastModule,
		AppCodeModule
	],
	declarations: [
		AccordionDemo
	]
})
export class AccordionDemoModule {}
