import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CcdetailsComponent } from "./ccdetails.component";


const routes: Routes = [
    { path: "", component: CcdetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CcdetailsRoutingModule { }
