import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SpecialinstructionsComponent } from "./specialinstructions.component";


const routes: Routes = [
    { path: "", component: SpecialinstructionsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SpecialinstructionsRoutingModule { }
