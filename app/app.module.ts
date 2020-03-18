import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FacilityitemsComponent } from "./facilityitems/facilityitems.component";
import { LoghelpComponent } from "./loginhelp/loghelp.component";
import { RestDetailsComponent } from "./restdetails/restdetails.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule

    ],
    declarations: [
        AppComponent,
        RegistrationComponent,
        LoghelpComponent,
        RestDetailsComponent,
        FacilityitemsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
