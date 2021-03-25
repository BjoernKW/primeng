import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {VirtualScrollerDemo} from './virtualscrollerdemo';
import {VirtualScrollerDemoRoutingModule} from './virtualscrollerdemo-routing.module';
import {VirtualScrollerModule} from 'primeng-11/virtualscroller';
import {ButtonModule} from 'primeng-11/button';
import {InputTextModule} from 'primeng-11/inputtext';
import {DropdownModule} from 'primeng-11/dropdown';
import {TabViewModule} from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
		VirtualScrollerDemoRoutingModule,
        VirtualScrollerModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		VirtualScrollerDemo
	]
})
export class VirtualScrollerDemoModule {}
