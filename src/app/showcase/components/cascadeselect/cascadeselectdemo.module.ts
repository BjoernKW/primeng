import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CascadeSelectDemo} from './cascadeselectdemo';
import {CascadeSelectDemoRoutingModule} from './cascadeselectdemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import {CascadeSelectModule} from 'primeng-11/cascadeselect';
import {FormsModule} from '@angular/forms';
import { AppInputStyleSwitchModule } from '../../app.inputstyleswitch.component';

@NgModule({
	imports: [
		CommonModule,
		CascadeSelectDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		CascadeSelectModule,
		FormsModule,
		AppInputStyleSwitchModule,
		AppCodeModule
	],
	declarations: [
		CascadeSelectDemo
	]
})
export class CascadeSelectDemoModule {}
