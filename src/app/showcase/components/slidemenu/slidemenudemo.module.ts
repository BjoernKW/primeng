import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideMenuDemo} from './slidemenudemo';
import {SlideMenuDemoRoutingModule} from './slidemenudemo-routing.module';
import {SlideMenuModule} from 'primeng-11/slidemenu';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		SlideMenuDemoRoutingModule,
        SlideMenuModule,
        ButtonModule,
        TabViewModule,
		AppCodeModule
	],
	declarations: [
		SlideMenuDemo
	]
})
export class SlideMenuDemoModule {}
