import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FacilityitemsComponent } from "./facilityitems.component";


const routes: Routes = [
    { path: "", component: FacilityitemsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FacilityitemsRoutingModule { }
