import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagDemo} from './tagdemo';
import {TagDemoRoutingModule} from './tagdemo-routing.module';
import {ButtonModule} from 'primeng-11/button';
import {PanelModule} from 'primeng-11/panel';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import { TagModule } from 'primeng-11/tag';

@NgModule({
	imports: [
		CommonModule,
		TagDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		TagModule,
		AppCodeModule
	],
	declarations: [
		TagDemo
	]
})
export class TagDemoModule {}
