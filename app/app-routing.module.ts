import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RegistrationComponent } from "./registration/registration.component";
import { LoghelpComponent } from "./loginhelp/loghelp.component";
import { RestDetailsComponent } from "./restdetails/restdetails.component";
import { FacilityitemsComponent } from "./facilityitems/facilityitems.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoghelpComponent },
    { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
    { path: "register", component: RegistrationComponent },
    { path: "getdetails/:id", component: FacilityitemsComponent },
    { path: "getpasswordrecoveryemail", component: LoghelpComponent },
    { path: "restdeatils", component: RestDetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
