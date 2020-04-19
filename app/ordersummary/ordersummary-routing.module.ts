import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { OrderSummaryComponent } from "./ordersummary.component";


const routes: Routes = [
    { path: "", component: OrderSummaryComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OrderSummaryRoutingModule { }
