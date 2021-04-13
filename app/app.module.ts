import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FacilityitemsComponent } from "./facilityitems/facilityitems.component";
import { LoghelpComponent } from "./loginhelp/loghelp.component";
import { RestDetailsComponent } from "./restdetails/restdetails.component";
import { OrderSummaryComponent } from "./ordersummary/ordersummary.component";
import { PaymentComponent } from "./payment/payment.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { DeliverydetailsComponent } from "./deliverydetails/deliverydetails.component";
import { SpecialinstructionsComponent } from "./specialinstructions/specialinstructions.component";
import { ModeofpaymentComponent } from "./modeofpayment/modeofpayment.component";
import { CartComponent } from "./cart/cart.component";
import { SettingsComponent } from "./settings/settings.component";
import { SearchComponent } from "./search/search.component";
import { SearchrComponent } from "./searchresults/searchr.component";
import { ModalComponent } from "./globalmodules/modal.component";
import { OrderHistoryComponent } from "./orderhistory/orderhistory.component";
import { OrderProcessDetailsComponent } from "./orderprocessdetails/orderprocessdetails.component";
import { ContactComponent } from "./contact/contact.component";
import { PaymentoptionsComponent } from "./paymentoptions/paymentoptions.component";
import { CcdetailsComponent } from "./ccdetails/ccdetails.component";
import { NetbankoptionsComponent } from "./netbankoptions/netbankoptions.component";
import { BankviewComponent } from "./bankview/bankview.component";
import * as platform from "platform";
declare var GMSServices: any;

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
        FacilityitemsComponent,
        OrderSummaryComponent,
        PaymentComponent,
        CheckoutComponent,
        DeliverydetailsComponent,
        SpecialinstructionsComponent,
        ModeofpaymentComponent,
        CartComponent,
        SettingsComponent,
        SearchComponent,
        SearchrComponent,
        ModalComponent,
        OrderHistoryComponent,
        OrderProcessDetailsComponent,
        ContactComponent,
        PaymentoptionsComponent,
        CcdetailsComponent,
        NetbankoptionsComponent,
        BankviewComponent
       
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        ModalComponent
    ]
})
export class AppModule { }
if (platform.isIOS) { 
    GMSServices.provideAPIKey("AIzaSyDfb01ZNY_r5UcY3dQ2dhiiqR7Wdf2aUTQ");
}

