import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {PrimeFlexSetup} from './primeflexsetup';
import {DisplayDemo} from './displaydemo';
import {ElevationDemo} from './elevationdemo';
import {FlexBoxDemo} from './flexboxdemo';
import {FormLayoutDemo} from './formlayoutdemo';
import {GridDemo} from './griddemo';
import {SpacingDemo} from './spacingdemo';
import {TextDemo} from './textdemo';
import {InputTextModule} from 'primeng-11/inputtext';
import {ButtonModule} from 'primeng-11/button';
import {CheckboxModule} from 'primeng-11/checkbox';
import {RadioButtonModule} from 'primeng-11/radiobutton';
import {PanelModule} from 'primeng-11/panel';
import {DropdownModule} from 'primeng-11/dropdown';
import {RippleModule} from 'primeng-11/ripple';
import {InputTextareaModule} from 'primeng-11/inputtextarea';
import {PrimeFlexDemoRoutingModule} from './primeflexdemo-routing.module';
import {TabViewModule} from 'primeng-11/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        PanelModule,
        DropdownModule,
        InputTextareaModule,
        RippleModule,
		PrimeFlexDemoRoutingModule,
		TabViewModule,
		AppCodeModule,
        AppInputStyleSwitchModule
	],
	declarations: [
        PrimeFlexSetup,
        DisplayDemo,
        ElevationDemo,
        FlexBoxDemo,
        FormLayoutDemo,
        GridDemo,
        SpacingDemo,
        TextDemo
	]
})
export class PrimeFlexDemoModule {}
