import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableDemo } from './tabledemo';
import { TableBasicDemo } from './tablebasicdemo';
import { TableDynamicDemo } from './tabledynamicdemo';
import { TableTemplatingDemo } from './tabletemplatingdemo';
import { TableSizeDemo } from './tablesizedemo';
import { TableGridLinesDemo } from './tablegridlinesdemo';
import { TableStripedDemo } from './tablestripeddemo';
import { TablePageDemo } from './tablepagedemo';
import { TableSortDemo } from './tablesortdemo';
import { TableSelectionDemo } from './tableselectiondemo';
import { TableFilterDemo } from './tablefilterdemo';
import { TableStyleDemo } from './tablestyledemo';
import { TableLazyDemo } from './tablelazydemo';
import { TableExportDemo } from './tableexportdemo';
import { TableColGroupDemo } from './tablecolgroupdemo';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { TableScrollDemo } from './tablescrolldemo';
import { TableVirtualScrollDemo } from './tablevirtualscrolldemo';
import { TableFlexScrollDemo } from './tableflexscrolldemo';
import { TableColToggleDemo } from './tablecoltoggledemo';
import { TableCrudDemo } from './tablecruddemo';
import { TableResponsiveDemo } from './tableresponsivedemo';
import { TableContextMenuDemo } from './tablecontextmenudemo';
import { TableColResizeDemo } from './tablecolresizedemo';
import { TableReorderDemo } from './tablereorderdemo';
import { TableEditDemo } from './tableeditdemo';
import { TableStateDemo } from './tablestatedemo';
import { TableStickyDemo } from './tablestickydemo';
import { TableRowGroupDemo } from './tablerowgroupdemo';
import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableModule } from 'primeng-11/table';
import { SliderModule } from 'primeng-11/slider';
import { MultiSelectModule } from 'primeng-11/multiselect';
import { ContextMenuModule } from 'primeng-11/contextmenu';
import { ToastModule } from 'primeng-11/toast';
import { ButtonModule } from 'primeng-11/button';
import { CalendarModule } from 'primeng-11/calendar';
import { DialogModule } from 'primeng-11/dialog';
import { ConfirmDialogModule } from 'primeng-11/confirmdialog';
import { RatingModule } from 'primeng-11/rating';
import { DropdownModule } from 'primeng-11/dropdown';
import { InputTextModule } from 'primeng-11/inputtext';
import { InputNumberModule } from 'primeng-11/inputnumber';
import { InputTextareaModule } from 'primeng-11/inputtextarea';
import { ProgressBarModule } from 'primeng-11/progressbar';
import { TooltipModule } from 'primeng-11/tooltip';
import { RadioButtonModule } from 'primeng-11/radiobutton';
import { ToolbarModule } from 'primeng-11/toolbar';
import { FileUploadModule } from 'primeng-11/fileupload';
import { TabViewModule } from 'primeng-11/tabview';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TableDemoRoutingModule,
        TableModule,
        CalendarModule,
		SliderModule,
        DialogModule,
        ConfirmDialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
        InputTextModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        RatingModule,
        AppCodeModule
	],
	declarations: [
		TableDemo,
		TableBasicDemo,
		TableDynamicDemo,
        TableTemplatingDemo,
        TableSizeDemo,
        TableGridLinesDemo,
        TableStripedDemo,
		TablePageDemo,
		TableSortDemo,
		TableSelectionDemo,
		TableFilterDemo,
		TableStyleDemo,
		TableLazyDemo,
		TableExportDemo,
		TableColGroupDemo,
		TableRowExpansionDemo,
        TableScrollDemo,
        TableVirtualScrollDemo,
        TableFlexScrollDemo,
		TableColToggleDemo,
		TableCrudDemo,
		TableResponsiveDemo,
		TableContextMenuDemo,
		TableColResizeDemo,
		TableReorderDemo,
		TableEditDemo,
        TableRowGroupDemo,
        TableStateDemo,
        TableStickyDemo
	]
})
export class TableDemoModule { }
