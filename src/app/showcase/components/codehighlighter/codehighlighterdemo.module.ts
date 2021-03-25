import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeHighlighterDemo} from './codehighlighterdemo';
import {CodeHighlighterDemoRoutingModule} from './codehighlighterdemo-routing.module';
import {CodeHighlighterModule} from 'primeng-11/codehighlighter';
import {TabViewModule} from 'primeng-11/tabview';

@NgModule({
	imports: [
		CommonModule,
		CodeHighlighterDemoRoutingModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CodeHighlighterDemo
	]
})
export class CodeHighlighterDemoModule {}
