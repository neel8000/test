import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { isIOS, isAndroid } from "platform";
import * as Frame from "ui/frame";

@Component({
	selector: "Loginhelp",
	moduleId: module.id,
	templateUrl: "./loghelp.component.html",
	styleUrls: ['./loghelp.component.css']
})
export class LoghelpComponent implements OnInit {
	public input: any;

	constructor(private location: Location,private router: Router) {
		this.input = {
			"email": ""
		}
	}

	ngOnInit(): void {
		console.log("pass");
	}

	public recoverPassword() {
		if (this.input.email) {
		//	ApplicationSettings.setString("account", JSON.stringify(this.input));
			this.location.back();
		} else {
		alert("All Fields Required!");
		}
	}

	public goBack() {
		this.location.back();
	}

	 login(){
		 this.router.navigate(["/home"]);
		 if (isIOS) {
          const controller = Frame.topmost().ios.controller;
          const navigationItem = controller.visibleViewController.navigationItem;
          console.log("This is IOS");
        // hide back button
        navigationItem.setHidesBackButtonAnimated(true, false);
        }
	}
}