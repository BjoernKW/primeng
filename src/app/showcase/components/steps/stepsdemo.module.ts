import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo} from './stepsdemo';
import { StepsDemoRoutingModule } from './stepsdemo-routing.module';
import { StepsModule } from 'primeng-11/steps';
import { TabViewModule } from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';
import { SeatDemo } from './seatdemo';
import { ConfirmationDemo } from './confirmationdemo';
import { PersonalDemo } from './personaldemo';
import { PaymentDemo } from './paymentdemo';
import { ButtonModule } from 'primeng-11/button';
import { CardModule } from 'primeng-11/card';
import { DropdownModule } from 'primeng-11/dropdown';
import { InputTextModule } from 'primeng-11/inputtext';
import { InputMaskModule } from 'primeng-11/inputmask';
import { CheckboxModule } from 'primeng-11/checkbox';
import { ToastModule } from 'primeng-11/toast';
import { FormsModule } from '@angular/forms';
import { TicketService } from './ticketservice';

@NgModule({
	imports: [
		CommonModule,
		StepsDemoRoutingModule,
        StepsModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		DropdownModule,
		InputMaskModule,
		CheckboxModule,
		ToastModule,
		FormsModule
	],
	declarations: [
		StepsDemo,
		SeatDemo,
		ConfirmationDemo,
		PersonalDemo,
		PaymentDemo
	],
	providers: [
		TicketService
	]
})
export class StepsDemoModule {}
