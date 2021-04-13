import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router , RoutesRecognized,ActivatedRoute } from '@angular/router';


@Component({
	selector: "Netbankoptions",
	moduleId: module.id,
	templateUrl: "./netbankoptions.component.html",
	styleUrls: ['./netbankoptions.component.css']
})
export class NetbankoptionsComponent implements OnInit {

	public paymentOptions:any[];

	constructor(private location: Location,private router: Router) {
		

		this.paymentOptions=[
            
             {grid:"comments: 0", name: "Axis Bank", imageSrc: "~/images/axis.png" },
             { grid:"comments: 1",name: "ICICI Bank ", imageSrc: "~/images/icici.png" },
             { grid:"comments: 2",name: "HDFC Bank", imageSrc: "~/images/hdfc.png" },
             { grid:"comments: 4",name: "Citi Bank", imageSrc: "~/images/citi.png" },
             { grid:"comments: 4",name: "State Bank", imageSrc: "~/images/sbi.png" },
             { grid:"comments: 4",name: "Punjab National Bank", imageSrc: "~/images/pnb.png" },
             { grid:"comments: 4",name: "Yes Bank", imageSrc: "~/images/yes.png" },
             { grid:"comments: 4",name: "Canara Bank", imageSrc: "~/images/can.png" }

        ]

	}

	ngOnInit(): void {
		console.log("reg1");
	}

	goTo(){
		this.router.navigate(["bank"]); 
	}



	public goBack() {
		this.location.back();
	}

}