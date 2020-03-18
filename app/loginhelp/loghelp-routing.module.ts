import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoghelpComponent } from "./loghelp.component";


const routes: Routes = [
    { path: "", component: LoghelpComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LoghelpRoutingModule { }
