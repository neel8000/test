import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DeliverydetailsComponent } from "./deliverydetails.component";


const routes: Routes = [
    { path: "", component: DeliverydetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DeliverydetailsRoutingModule { }
