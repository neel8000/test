import {ActivatedRoute} from "@angular/router";
import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Location } from "@angular/common";
import * as utils from "utils/utils";
import { isIOS, isAndroid } from "platform";
import * as Frame from "ui/frame";

@Component({
	selector: "Facilityitems",
	moduleId: module.id,
	templateUrl: "./facilityitems.component.html",
	styleUrls: ['./facilityitems.component.css']
})
export class FacilityitemsComponent implements OnInit {
	public input1: any;
	public  countries1:any[];
	public name1:any;
	public paramRoute1:any;

	constructor(private router: Router,private location: Location,private route: ActivatedRoute) {
		this.paramRoute1=route;

		this.input1 = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
		}

		this.name1 = this.paramRoute1.snapshot.params['id'];
		console.log("---------------"+this.name1);

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

		this.countries1=[];
		try{
			for(var t in countriesA){
			console.log("===============");
			console.log(countriesA[t]["grid"]);
			console.log(this.name1);
						if(countriesA[t]["grid"]==this.name1){
							this.countries1.push(countriesA[t]);
							console.log(t);
						}
			}
		}catch(err){}
		
	}

	ngOnInit(): void {
		console.log("reg1");
		
	}

	public register() {
		if (this.input1.firstname && this.input1.lastname && this.input1.email && this.input1.password) {
		//	ApplicationSettings.setString("account", JSON.stringify(this.input));
			this.location.back();
		} else {
		alert("All Fields Required!");
		}
	}

	public goBack() {
		this.location.back();
	}

	onItemTap(args: ItemEventData): void {
        
        console.log('Item with index: ' +this.countries1[args.index].grid + ' tapped');
        this.router.navigate(["getdetails/"+this.countries1[args.index].grid]);
    }
}