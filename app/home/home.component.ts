import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Component, OnInit,AfterViewChecked, AfterViewInit } from "@angular/core";
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
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit  {

  public counter: number = 0;
  public  countries:any[];
  public listPickerCountries:any[];
  public selectedListPickerIndex: number = 0;
  public orderTypes:any[];
  public searchPhrase: string;
  textFieldValue: string = "";


  onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);   
        this.onClear();
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

  @ViewChild(RadSideDrawerComponent, { static: false })

    public drawerComponent: RadSideDrawerComponent;

    mainContentText: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    
    onOpenDrawerTap() {
      this.onClear();
      this.drawerComponent.sideDrawer.showDrawer();
      this.mainContentText = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";       
    }

    onCloseDrawerTap() {
        this.drawerComponent.sideDrawer.closeDrawer();
        //call api
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
        this.onClear();

    }

    onItemTap(args: ItemEventData): void {    
        console.log('Item with index: ' +this.countries[args.index].grid + ' tapped');
        this.router.navigate(["getdetails/"+this.countries[args.index].grid]);
        this.onClear();
    }

    

    deleteItem(args): void {
      console.log('Item with index: ' + args.object.text+ ' tapped');
      var j =0;
      var yy = undefined;
      for(var i in this.countries){
        if(this.countries[i].grid===args.object.text){
          yy=j;
          break;
        }
       j++;
      }
      console.log('Index :' + yy);
      this.countries.splice(yy, 1);
   
    }

    next(){
      this.onClear();
      this.router.navigate(["cart"]);
    }


    constructor(private router: Router,private location: Location) {



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

  checkout(){
    this.onClear();
    this.router.navigate(["checkout"]); 
  }

  onCart(){
       console.log('Navigating to cart');
       this.router.navigate(["cart"]);
       this.onClear();
  }


  ngOnInit(): void {
   setTimeout(() => Frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false),3000);
  }
    
  ngAfterViewInit() {
    setTimeout(() => Frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false),3000);
  }

    
  getDetails():void{
    this.router.navigate(["/restdeatils"]);
    this.onClear();
  }



}
