import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataViewDemo} from './dataviewdemo';
import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
import {DataViewModule} from 'primeng-11/dataview';
import {PanelModule} from 'primeng-11/panel';
import {InputTextModule} from 'primeng-11/inputtext';
import {RatingModule} from 'primeng-11/rating';
import {ButtonModule} from 'primeng-11/button';
import {DropdownModule} from 'primeng-11/dropdown';
import {AppCodeModule} from '../../app.code.component';
import {TabViewModule} from 'primeng-11/tabview';

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
		DataViewDemoRoutingModule,
        DataViewModule,
        PanelModule,
        DropdownModule,
        TabViewModule,
        InputTextModule,
        RatingModule,
        ButtonModule,
        AppCodeModule
	],
	declarations: [
		DataViewDemo
	]
})
export class DataViewDemoModule {}
