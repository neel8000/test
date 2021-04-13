import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SearchrRoutingModule } from "./searchr-routing.module";
import { SearchrComponent } from "./searchr.component";

@NgModule({
	imports: [
		NativeScriptUIListViewModule,
		NativeScriptUICalendarModule,
		NativeScriptUIChartModule,
		NativeScriptUIDataFormModule,
		NativeScriptUIAutoCompleteTextViewModule,
		NativeScriptUIGaugeModule,
		NativeScriptCommonModule,
		NativeScriptFormsModule
	],
	declarations: [
		SearchrComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class SearchrModule { }