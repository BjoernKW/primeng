import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarDemo} from './avatardemo';
import {AvatarDemoRoutingModule} from './avatardemo-routing.module';
import {AccordionModule} from 'primeng-11/accordion';
import {ButtonModule} from 'primeng-11/button';
import {TabViewModule} from 'primeng-11/tabview';
import {ToastModule} from 'primeng-11/toast';
import { AvatarModule } from 'primeng-11/avatar';
import { AvatarGroupModule } from 'primeng-11/avatargroup';
import { BadgeModule } from 'primeng-11/badge';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		AvatarDemoRoutingModule,
        AccordionModule,
        ButtonModule,
        TabViewModule,
		ToastModule,
		AvatarModule,
		AvatarGroupModule,
		BadgeModule,
		AppCodeModule
	],
	declarations: [
		AvatarDemo
	]
})
export class AvatarDemoModule {}
