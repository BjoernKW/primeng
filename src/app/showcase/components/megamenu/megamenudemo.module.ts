import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MegaMenuDemo} from './megamenudemo';
import {MegaMenuDemoRoutingModule} from './megamenudemo-routing.module';
import {MegaMenuModule} from 'primeng-11/megamenu';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		MegaMenuDemoRoutingModule,
        MegaMenuModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		MegaMenuDemo
	]
})
export class MegaMenuDemoModule {}
