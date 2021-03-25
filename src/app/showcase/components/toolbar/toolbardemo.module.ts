import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarDemo} from './toolbardemo';
import {ToolbarDemoRoutingModule} from './toolbardemo-routing.module';
import {ToolbarModule} from 'primeng-11/toolbar';
import {ButtonModule} from 'primeng-11/button';
import {SplitButtonModule} from 'primeng-11/splitbutton';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		ToolbarDemoRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		ToolbarDemo
	]
})
export class ToolbarDemoModule {}
