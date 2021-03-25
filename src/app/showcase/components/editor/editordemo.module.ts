import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EditorDemo} from './editordemo';
import {EditorDemoRoutingModule} from './editordemo-routing.module';
import {EditorModule} from 'primeng-11/editor';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		EditorDemoRoutingModule,
        EditorModule,
        ButtonModule,
		TabViewModule,
		AppCodeModule
	],
	declarations: [
		EditorDemo
	]
})
export class EditorDemoModule {}
