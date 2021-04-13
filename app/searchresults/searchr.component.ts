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
import { isIOS, isAndroid ,screen} from "platform";
import * as Frame from "ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";


@Component({
	selector: "searchr-component",
	moduleId: module.id,
	templateUrl: "./searchr.component.html",
	styleUrls: ['./searchr.component.css']
})
export class SearchrComponent implements OnInit {

	

	
	public input: any;
    screenHeight : any;
    public counter: number = 0;
    public  countries:any[];
    public listPickerCountries:any[];
    public selectedListPickerIndex: number = 0;
    public orderTypes:any[];
    public searchPhrase: string;
 mainContentText: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    

	constructor(private router: Router,private location: Location) {
		this.input = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
	}

    this.screenHeight=screen.mainScreen.heightDIPs;

 this.mainContentText = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    



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

    orderHistory(){
        this.router.navigate(["orderhistory"]); 
    }


	ngOnInit(): void {
        console.log("Search");
         this.onClear();
         request({
        url: "https://httpbin.org/post",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({
            username: "user",
            password: "pass"
  
          })
        }).then((response) => {
            const result = response.content.toJSON();
              this.mainContentText=JSON.stringify(result); 
        }, (e) => {
            // >> (hide)
            console.log("Error: ");
            console.log(e);
            // << (hide)
        });
    }


    goHome():void{
        this.router.navigate(["/home"]);
    }

    contact(){
    this.router.navigate(["/contact"]);
    }


	
    
    goToCart():void{
        this.router.navigate(["/cart"]);
    }

     search() {   
       this.router.navigate(["/search"]);
    }
	
	getDetails(){
        this.router.navigate(["/restdeatils"]);
       
    }

    onClear():void{
        if (isIOS) {
          Frame.topmost().nativeView.endEditing(true);
          const controller = Frame.topmost().ios.controller;
          const navigationItem = controller.visibleViewController.navigationItem;
          console.log("This is IOS");
        // hide back button
        navigationItem.setHidesBackButtonAnimated(true, false);
        }
        if (isAndroid) {
          utils.ad.dismissSoftInput();
        }
    }

    deliverydetails(){
        this.router.navigate(["deliverydetails"]); 
      }  


}