import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarDemo} from './menubardemo';
import {MenubarDemoRoutingModule} from './menubardemo-routing.module';
import {MenubarModule} from 'primeng-11/menubar';
import {InputTextModule} from 'primeng-11/inputtext';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		MenubarDemoRoutingModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		MenubarDemo
	]
})
export class MenubarDemoModule {}
