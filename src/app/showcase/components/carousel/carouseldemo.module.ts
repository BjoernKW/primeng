import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselDemo} from './carouseldemo';
import {CarouselDemoRoutingModule} from './carouseldemo-routing.module';
import {CarouselModule} from 'primeng-11/carousel';
import {ButtonModule} from 'primeng-11/button';
import {ToastModule} from 'primeng-11/toast';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        CarouselDemoRoutingModule,
        CarouselModule,
        ButtonModule,
        ToastModule,
        TabViewModule,
        AppCodeModule
	],
	declarations: [
		CarouselDemo
	]
})
export class CarouselDemoModule {}
