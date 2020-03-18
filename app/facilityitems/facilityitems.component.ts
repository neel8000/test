import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: "Facilityitems",
	moduleId: module.id,
	templateUrl: "./facilityitems.component.html",
	styleUrls: ['./facilityitems.component.css']
})
export class FacilityitemsComponent implements OnInit {
	public input: any;
	public  countries:any[];
	public name :any;
	public paramRoute:any;

	constructor(private location: Location,private route: ActivatedRoute) {
		this.paramRoute=route;
		this.input = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
		}

		this.name = this.paramRoute.snapshot.params['id'];
		console.log("---------------"+this.name);

		  let countriesA=[
            
             {grid:"comments: 0", name: "Australia ,sadasd , asdas , dasdasdasd ,", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
             { grid:"comments: 1",name: "Australiazcxc zxczxcxz c zxc z xc zxc zx cz xc zxc z xc zxczxcdfsffsd sfsdfsdfsdfdsf sdfdsfsdfsdfsdf ", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
             { grid:"comments: 2",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
             { grid:"comments: 3",name: "USA", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
             { grid:"comments: 4",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
             { grid:"comments: 5",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
             { grid:"comments: 6",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
             { grid:"comments: 7",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
             { grid:"comments: 8",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
             { grid:"comments: 9",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" }

        ];

		this.countries=[];
try{
		for(var t in countriesA){
console.log("===============");
console.log(countriesA[t]["grid"]);
console.log(this.name);
			if(countriesA[t]["grid"]==this.name){
				this.countries.push(countriesA[t]);
				
				console.log(t);
			}
		}
}catch(err){}
		
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