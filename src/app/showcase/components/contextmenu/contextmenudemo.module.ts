import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContextMenuDemo} from './contextmenudemo';
import {ContextMenuDemoRoutingModule} from './contextmenudemo-routing.module';
import {ContextMenuModule} from 'primeng-11/contextmenu';
import {TabViewModule} from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ContextMenuDemoRoutingModule,
        ContextMenuModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		ContextMenuDemo
	]
})
export class ContextMenuDemoModule {}
