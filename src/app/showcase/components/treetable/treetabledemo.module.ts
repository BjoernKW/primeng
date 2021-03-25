import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeTableDemo } from './treetabledemo';
import { TreeTableDemoRoutingModule } from './treetabledemo-routing.module';
import { TreeTableModule } from 'primeng-11/treetable';
import { TreeTablePageDemo } from './treetablepagedemo';
import { TreeTableSortDemo } from './treetablesortdemo';
import { TreeTableSelectionDemo } from './treetableselectiondemo';
import { TreeTableStyleDemo } from './treetablestyledemo';
import { TreeTableLazyDemo } from './treetablelazydemo';
import { TreeTableColGroupDemo } from './treetablecolgroupdemo';
import { TreeTableTemplatingDemo } from './treetabletemplatingdemo';
import { TreeTableScrollDemo } from './treetablescrolldemo';
import { TreeTableFlexScrollDemo } from './treetableflexscrolldemo';
import { TreeTableColToggleDemo } from './treetablecoltoggledemo';
import { TreeTableResponsiveDemo } from './treetableresponsivedemo';
import { TreeTableContextMenuDemo } from './treetablecontextmenudemo';
import { TreeTableColResizeDemo } from './treetablecolresizedemo';
import { TreeTableReorderDemo } from './treetablereorderdemo';
import { TreeTableEditDemo } from './treetableeditdemo';
import { TreeTableFilterDemo } from './treetablefilterdemo';
import { TreeTableSizeDemo } from './treetablesizedemo';
import { ToastModule } from 'primeng-11/toast';
import { DialogModule } from 'primeng-11/dialog';
import { ButtonModule } from 'primeng-11/button';
import { TabViewModule } from 'primeng-11/tabview';
import { MultiSelectModule } from 'primeng-11/multiselect';
import { InputTextModule } from 'primeng-11/inputtext';
import { ContextMenuModule } from 'primeng-11/contextmenu';
import { AppCodeModule } from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TreeTableDemoRoutingModule,
        TreeTableModule,
        ToastModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        MultiSelectModule,
        InputTextModule,
        ContextMenuModule,
        AppCodeModule
	],
	declarations: [
        TreeTableDemo,
        TreeTablePageDemo,
        TreeTableSortDemo,
        TreeTableSelectionDemo,
        TreeTableTemplatingDemo,
        TreeTableStyleDemo,
        TreeTableLazyDemo,
        TreeTableColGroupDemo,
        TreeTableScrollDemo,
        TreeTableFlexScrollDemo,
        TreeTableColToggleDemo,
        TreeTableResponsiveDemo,
        TreeTableContextMenuDemo,
        TreeTableColResizeDemo,
        TreeTableReorderDemo,
        TreeTableEditDemo,
        TreeTableFilterDemo,
        TreeTableSizeDemo
	]
})
export class TreeTableDemoModule {}
