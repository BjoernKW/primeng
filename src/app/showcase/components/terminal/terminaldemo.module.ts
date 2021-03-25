import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TerminalDemo} from './terminaldemo';
import {TerminalDemoRoutingModule} from './terminaldemo-routing.module';
import {TerminalModule} from 'primeng-11/terminal';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		TerminalDemoRoutingModule,
        TerminalModule,
        TabViewModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		TerminalDemo
	]
})
export class TerminalDemoModule {}
