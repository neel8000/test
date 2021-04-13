import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Component, OnInit,AfterViewChecked, AfterViewInit , ChangeDetectorRef} from "@angular/core";
import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Location } from "@angular/common";
import * as utils from "utils/utils";
import { isIOS, isAndroid ,screen,device} from "platform";
import * as Frame from "ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";


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
	screenHeight : any;

	constructor(private location: Location,private router: Router) {
		this.input = {
			"email": ""
		}
		this.screenHeight=screen.mainScreen.heightDIPs-350;
		console.log(device.model);
		console.log(device.osVersion);
		if(device.model==='iPhone' && device.osVersion==='12.0'){
			this.screenHeight=screen.mainScreen.heightDIPs-300;
		}
	}

	

	goHome():void{
		this.router.navigate(["/home"]);
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
			this.location.back();
		} else {
			alert("All Fields Required!");
		}
	}

	

	login(){
		 this.router.navigate(["/restdetails"]);
	}

	
	goToCart():void{
    	this.router.navigate(["cart/7000"]);
  	}

  	 search() {   
       this.router.navigate(["/search"]);
    }


   

}