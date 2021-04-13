import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { OrderProcessDetailsComponent } from "./orderprocessdetails.component";


const routes: Routes = [
    { path: "", component: OrderProcessDetailsComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OrderProcessDetailsRoutingModule { }
