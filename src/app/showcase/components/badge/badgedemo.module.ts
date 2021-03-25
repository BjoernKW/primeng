import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BadgeDemo} from './badgedemo';
import {BadgeDemoRoutingModule} from './badgedemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import { BadgeModule } from 'primeng-11/badge';

@NgModule({
	imports: [
		CommonModule,
		BadgeDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		BadgeModule,
        AppCodeModule
	],
	declarations: [
		BadgeDemo
	]
})
export class BadgeDemoModule {}
