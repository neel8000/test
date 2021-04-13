import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from '@angular/router';


@Component({
	selector: "OrderSummary",
	moduleId: module.id,
	templateUrl: "./ordersummary.component.html",
	styleUrls: ['./ordersummary.component.css']
})
export class OrderSummaryComponent implements OnInit {
	public input: any;

	constructor(private location: Location,private router: Router) {
		this.input = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
		}
	}

	ngOnInit(): void {
		console.log("reg1");
	}

	

	goHome():void{
		this.router.navigate(["/home"]);
	}


}