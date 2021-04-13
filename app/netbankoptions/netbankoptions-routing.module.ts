import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NetbankoptionsComponent } from "./netbankoptions.component";


const routes: Routes = [
    { path: "", component: NetbankoptionsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NetbankoptionsRoutingModule { }
