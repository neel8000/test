import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";

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
		SearchComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class SearchModule { }