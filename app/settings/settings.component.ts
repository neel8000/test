import { ViewChild } from "@angular/core";
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
	selector: "settings-component",
	moduleId: module.id,
	templateUrl: "./settings.component.html",
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	

	
	public input: any;
    public counter: number = 0;
    public  countries:any[];
    public listPickerCountries:any[];
    public selectedListPickerIndex: number = 0;
    public orderTypes:any[];
    public searchPhrase: string;
 

	constructor(private router: Router,private location: Location) {
		this.input = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
	}




    this.listPickerCountries = ["Select","Assamese","Bengali", "Chinese", "Punjabi", "Maharshtrian", "South Indian","Tibetan"];
    this.orderTypes=["Delevery","Take out"];
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

	deliverydetails(){
		this.router.navigate(["deliverydetails"]); 
	}
	specialinst(){
		this.router.navigate(["specialinstructions"]); 
	}
	modeofpayment(){
		this.router.navigate(["modeofpayment"]); 
	}

	onClear():void{
        if (isIOS) {
            Frame.topmost().nativeView.endEditing(true);
        }
        if (isAndroid) {
            utils.ad.dismissSoftInput();
        }
    }

    checkout(){
        this.router.navigate(["checkout"]); 
    }

	ngOnInit(): void {
        console.log("Settings");
    }

	public settings() {
		console.log("Settings");
	}

	public goHome() {
        console.log("going home");
		this.router.navigate(["/home"]);
	}

	 
    onItemTap(args: ItemEventData): void {    
        console.log('Item with index: ' +this.countries[args.index].grid + ' tapped');
        this.router.navigate(["getdetails/"+this.countries[args.index].grid]);
    }
	
    onSettings(){
       console.log('Navigating to settings');
       this.router.navigate(["settings"]);
    }


    goToCart():void{
        this.router.navigate(["/cart"]);
    }

     search() {   
       this.router.navigate(["/search"]);
    }
    



}