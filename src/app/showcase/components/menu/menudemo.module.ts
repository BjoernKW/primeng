import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuDemo} from './menudemo';
import {MenuDemoRoutingModule} from './menudemo-routing.module';
import {MenuModule} from 'primeng-11/menu'
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {ToastModule} from 'primeng-11/toast';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		MenuDemoRoutingModule,
        MenuModule,
        ButtonModule,
		TabViewModule,
		ToastModule,
		AppCodeModule
	],
	declarations: [
		MenuDemo
	]
})
export class MenuDemoModule {}
