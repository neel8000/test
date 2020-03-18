import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";


@Component({
	selector: "RestDetails",
	moduleId: module.id,
	templateUrl: "./restdetails.component.html",
	styleUrls: ['./restdetails.component.css']
})
export class RestDetailsComponent implements OnInit {
	public input: any;
	public counter: number = 0;
  public  countries:any[];
  public listPickerCountries:any[];
  public selectedListPickerIndex: number = 0;
  public orderTypes:any[];
  public searchPhrase: string;

	constructor(private location: Location,private router: Router) {
		this.input = {
			"email": ""
		}
	}

	ngOnInit(): void {
		console.log("pass");
		  this.countries=[
            
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

        ]
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
		 this.router.navigate(["/restdetails"]);
	}
}