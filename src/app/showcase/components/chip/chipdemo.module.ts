import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipDemo} from './chipdemo';
import {ChipDemoRoutingModule} from './chipdemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import { ChipModule } from 'primeng-11/chip';

@NgModule({
	imports: [
		CommonModule,
		ChipDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		ChipModule,
		AppCodeModule
	],
	declarations: [
		ChipDemo
	]
})
export class ChipDemoModule {}
