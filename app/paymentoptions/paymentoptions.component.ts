import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router , RoutesRecognized,ActivatedRoute } from '@angular/router';


@Component({
	selector: "Paymentoptions",
	moduleId: module.id,
	templateUrl: "./paymentoptions.component.html",
	styleUrls: ['./paymentoptions.component.css']
})
export class PaymentoptionsComponent implements OnInit {

	public paymentOptions:any[];

	constructor(private location: Location,private router: Router) {
		

		this.paymentOptions=[
            
             {grid:"comments: 0", name: "Credit / Debit card", imageSrc: "~/images/cc.png", tap:"ccdetails" },
             { grid:"comments: 1",name: "Net banking ", imageSrc: "~/images/nb.png" , tap:"netbanks"},
             { grid:"comments: 2",name: "BHIM - UPI", imageSrc: "~/images/upi.png" , tap:""},
             { grid:"comments: 4",name: "Paypal", imageSrc: "~/images/paypal.jpg" , tap:""}

        ]

	}

	ngOnInit(): void {
		console.log("reg1");
	}



	public goBack() {
		this.location.back();
	}

	goTo(arg){
	console.log("--------"+arg+"--------");
		this.router.navigate([arg]); 
	}

}