import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenuDemo} from './tabmenudemo';
import {TabMenuDemoRoutingModule} from './tabmenudemo-routing.module';
import {TabMenuModule} from 'primeng-11/tabmenu';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		TabMenuDemoRoutingModule,
        TabMenuModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		TabMenuDemo,
	]
})
export class TabMenuDemoModule {}
