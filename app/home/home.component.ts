import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Component, OnInit,AfterViewChecked, AfterViewInit , ChangeDetectorRef,ViewContainerRef} from "@angular/core";
import { Router , RoutesRecognized,ActivatedRoute } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators'
import { Page } from "tns-core-modules/ui/page";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Location } from "@angular/common";
import * as utils from "utils/utils";
import { isIOS, isAndroid } from "platform";
import * as Frame from "ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "../globalmodules/modal.component";
import { ShowModalOptions } from "tns-core-modules/ui/core/view";
const modalViewModulets = "ns-ui-category/modal-view/basics/modal-ts-view-page";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit ,AfterViewChecked {

  public counter: number = 0;
  public  countries:any[];
  public listPickerCountries:any[];
  public selectedListPickerIndex: number = 0;
  public orderTypes:any[];
  public searchPhrase: string;
  textFieldValue: string = "";
  mainContentText: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
  public searchBarWidth : string;  
  public searchBarStyle:string;
  public cancelVisibility:string;
  public rightAlign:string;
  wrapWidth:string;
  wrapHeight:string;
  public homeData:any[];
  public gridCols:any="";

  public arrayItems = [
    { name: "United States" },
    { name: "Bulgaria" },
    { name: "Germany" },
    { name: "Denmark" },
    { name: "India" },
    { name: "Spain" },
    { name: "Italy" }
];

  
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

 

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }


  



    
    search() {
      this.onClear();
     // this.drawerComponent.sideDrawer.showDrawer();
      this.mainContentText = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";    
       this.router.navigate(["/search"]);
    }

    onCloseDrawerTap() {
       // this.drawerComponent.sideDrawer.closeDrawer();
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
      this.router.navigate(["cart/18000"]);
    }


    constructor(private router: Router,private location: Location,private _changeDetectionRef: ChangeDetectorRef,private _aRoute: ActivatedRoute,private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) {



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

        ];

        this.homeData=[
              {
                headerText:"Today's Special",
                etList:[
                  {
                    idd:1,
                    text:"The image above is the NativeScript logo",
                    rating:[1,2,3,4],
                    expensiveIndex:[1,2]
                  },
                  {
                    idd:2,
                    text:"The image above is the NativeScript logo",
                    rating:[1,2,3],
                    expensiveIndex:[1,2]
                  },
                  {
                    idd:3,
                    text:"Heloooooo",
                    rating:[1,2,3],
                    expensiveIndex:[1,2]
                  }

                ]
              },
              {
                headerText:"Today's Special",
                etList:[
                  {
                    idd:1,
                    text:"The image above is the NativeScript logo",
                    rating:[1,2,3],
                    expensiveIndex:[1,2]
                  },
                  {
                    idd:2,
                    text:"This is big",
                    rating:[1,2,3],
                    expensiveIndex:[1,2,3,4,5]
                  },
                  {
                    idd:3,
                    text:"The image above is the NativeScript logo",
                    rating:[1,2,3],
                    expensiveIndex:[1,2]
                  }

                ]
              },
              {
                headerText:"Today's Special",
                etList:[
                  {
                    idd:1,
                    text:"The image above is the NativeScript logo",
                    rating:[1,2],
                    expensiveIndex:[1,2]
                  },
                  {
                    idd:2,
                    text:"The image above is the NativeScript logo",
                    rating:[1,2,3],
                    expensiveIndex:[1,2]
                  },
                  {
                    idd:3,
                    text:"The image above is the NativeScript logo",
                    rating:[1],
                    expensiveIndex:[1,2]
                  }

                ]
              },
              {
                headerText:"Today's Special",
                etList:[
                  {
                    idd:1,
                    text:"The image above is the NativeScript logo",
                    rating:[1,2,3,4],
                    expensiveIndex:[1]
                  },
                  {
                    idd:2,
                    text:"The image above is the NativeScript logo",
                    rating:[1,2,3,4],
                    expensiveIndex:[1,2]
                  },
                  {
                    idd:3,
                    text:"Big SFO",
                    rating:[1,2,3,4,5],
                    expensiveIndex:[1,2,4,5]
                  }

                ]
              }




        ];

        for(let e of this.homeData){
          for(let b of e.etList){
          
              this.gridCols+="auto, ";
         
          }
        }
       console.log("gridcols----"+this.gridCols);


        console.log(this._aRoute);

        this.router.events
                .subscribe((e: any) => {
                      var seen = [];
                      var json = JSON.stringify(e, function(key, val) {
                         if (typeof val == "object") {
                              if (seen.indexOf(val) >= 0)
                                  return
                              seen.push(val)
                          }
                          return val
                      });

                      var t = JSON.stringify(json);
                      console.log(t);
                      var tIndex = t.indexOf("urlAfterRedirects");
                      
                        if(tIndex==31){
                          console.log(tIndex); 
                        }
                    });

        
    }

  showModal() {

      const options: ModalDialogOptions = {
          viewContainerRef: this.viewContainerRef,
          fullscreen: true,
          context: {}
      };

      const option1: ShowModalOptions = {
        context: { searchPhrase: "test_username", locationStr: "test" },
        closeCallback: (searchPhrase, locationStr) => {
            alert(`Username: ${searchPhrase} : Password: ${locationStr}`);
        },
        fullscreen: true
    };
      this.modalService.showModal(ModalComponent, options).then((result: string) => {
        console.log("99999999999999"+result);
    });
      
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
       this.router.navigate(["cart/8000"]);
       this.onClear();
  }

  orderHistory(){
   this.router.navigate(["orderhistory"]); 
  
  }
 

  ngOnInit(): void {
   setTimeout(() => Frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false),3000);
   this.searchBarWidth="";
   this.searchBarStyle="";
   this.cancelVisibility="collapsed";
   this.rightAlign="right";
   this.wrapWidth="100%";
   this.wrapHeight="";

  }

  reduceWidth(){
    this.searchBarWidth="";
    this.searchBarStyle="";
    this.cancelVisibility="visible";
    this.rightAlign="right";
    this.wrapWidth="75%";
    this.wrapHeight="";
  }

  cancelSearch(){
    this.searchBarWidth="100%";
   this.searchBarStyle="";
   this.cancelVisibility="collapsed";
   this.rightAlign="right";
   this.wrapWidth="100%";
   this.wrapHeight="";
  }
    
  ngAfterViewInit() {
   setTimeout(() => this.initiate(),5000);

    this._changeDetectionRef.detectChanges();
  }

  ngAfterViewChecked(){
      

  }


  initiate():void{

        Frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false)
           

  }

  contact(){
    this.router.navigate(["/contact"]);

  }

    
  getDetails():void{
    this.router.navigate(["/searchr"]);
    this.onClear();
  }



}
