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
import { SettingsComponent } from "./settings/settings.component";
import { SearchComponent } from "./search/search.component";
import { SearchrComponent } from "./searchresults/searchr.component";
import { OrderSummaryComponent } from "./ordersummary/ordersummary.component";
import { OrderHistoryComponent } from "./orderhistory/orderhistory.component";
import { OrderProcessDetailsComponent } from "./orderprocessdetails/orderprocessdetails.component";
import { ContactComponent } from "./contact/contact.component";
import { PaymentoptionsComponent } from "./paymentoptions/paymentoptions.component";
import { CcdetailsComponent } from "./ccdetails/ccdetails.component";
import { NetbankoptionsComponent } from "./netbankoptions/netbankoptions.component";
import { BankviewComponent } from "./bankview/bankview.component";



const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoghelpComponent },
    { path: "home", loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
    { path: "register", component: RegistrationComponent },
    { path: "getdetails/:id", component: FacilityitemsComponent },
    { path: "getpasswordrecoveryemail", component: LoghelpComponent },
    { path: "restdeatils", component: RestDetailsComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "checkout/:orderId", component: CheckoutComponent },
    { path: "deliverydetails", component: DeliverydetailsComponent },
    { path: "specialinstructions", component: SpecialinstructionsComponent },
    { path: "modeofpayment", component: ModeofpaymentComponent },
    { path: "cart/:amount", component: CartComponent },
    { path: "cart", component: CartComponent },
    { path: "settings", component: SettingsComponent },
    { path: "search", component: SearchComponent },
    { path: "searchr", component: SearchrComponent },
    { path: "ordersummary", component: OrderSummaryComponent },
    { path: "orderhistory", component: OrderHistoryComponent },
    { path: "orderprocessdetails", component: OrderProcessDetailsComponent },
    { path: "contact", component: ContactComponent },
    { path: "paymentoptions", component: PaymentoptionsComponent },
    { path: "ccdetails", component: CcdetailsComponent },
    { path: "netbanks", component: NetbankoptionsComponent },
    { path: "bank", component: BankviewComponent },
    { path: "bank/:orderId", component: BankviewComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
