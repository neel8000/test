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
        CartComponent
       
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
