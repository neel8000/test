import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";


@Component({
	selector: "Registration",
	moduleId: module.id,
	templateUrl: "./registration.component.html",
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	public input: any;

	constructor(private location: Location) {
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

	public register() {
		if (this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
		//	ApplicationSettings.setString("account", JSON.stringify(this.input));
			this.location.back();
		} else {
		alert("All Fields Required!");
		}
	}

	public goBack() {
		this.location.back();
	}

}