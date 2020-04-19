import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RegistrationComponent } from "./registration/registration.component";
import { LoghelpComponent } from "./loginhelp/loghelp.component";
import { RestDetailsComponent } from "./restdetails/restdetails.component";
import { FacilityitemsComponent } from "./facilityitems/facilityitems.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { DeliverydetailsComponent } from "./deliverydetails/deliverydetails.component";
import { SpecialinstructionsComponent } from "./specialinstructions/specialinstructions.component";
import { ModeofpaymentComponent } from "./modeofpayment/modeofpayment.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoghelpComponent },
    { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
    { path: "register", component: RegistrationComponent },
    { path: "getdetails/:id", component: FacilityitemsComponent },
    { path: "getpasswordrecoveryemail", component: LoghelpComponent },
    { path: "restdeatils", component: RestDetailsComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "deliverydetails", component: DeliverydetailsComponent },
    { path: "specialinstructions", component: SpecialinstructionsComponent },
    { path: "modeofpayment", component: ModeofpaymentComponent },
    { path: "cart", component: CartComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
