import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropDemo} from './dragdropdemo';
import {DragDropDemoRoutingModule} from './dragdropdemo-routing.module';
import {DragDropModule} from 'primeng-11/dragdrop';
import {PanelModule} from 'primeng-11/panel';
import {TableModule} from 'primeng-11/table';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';


@NgModule({
	imports: [
		CommonModule,
		DragDropDemoRoutingModule,
        DragDropModule,
        PanelModule,
        TableModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		DragDropDemo
	]
})
export class DragDropDemoModule {}
