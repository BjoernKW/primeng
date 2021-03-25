import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesDemo} from './messagesdemo';
import {MessagesDemoRoutingModule} from './messagesdemo-routing.module';
import {MessagesModule} from 'primeng-11/messages';
import {MessageModule} from 'primeng-11/message';
import {InputTextModule} from 'primeng-11/inputtext';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {RippleModule} from 'primeng-11/ripple';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		MessagesDemoRoutingModule,
        MessagesModule,
        MessageModule,
        ButtonModule,
        InputTextModule,
        TabViewModule,
        RippleModule,
        AppCodeModule
	],
	declarations: [
		MessagesDemo
	]
})
export class MessagesDemoModule {}
