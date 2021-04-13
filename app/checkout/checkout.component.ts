import { ViewChild } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Component, OnInit ,ViewContainerRef} from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Location } from "@angular/common";
import * as utils from "utils/utils";
import { isIOS, isAndroid ,screen} from "platform";
import * as Frame from "ui/frame";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "../globalmodules/modal.component";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";


@Component({
	selector: "Checkout",
	moduleId: module.id,
	templateUrl: "./checkout.component.html",
	styleUrls: ['./checkout.component.css'],
    providers: [ModalDialogService]
})
export class CheckoutComponent implements OnInit {

	private drawer: SideDrawerType;

	@ViewChild(RadSideDrawerComponent,{ static: false })
	public drawerComponent2: RadSideDrawerComponent;

	public input: any;
 public counter: number = 0;
  public  countries:any[];
  public listPickerCountries:any[];
  public selectedListPickerIndex: number = 0;
  public orderTypes:any[];
  public searchPhrase: string;
  public paramRoute1:any;
  public orderId:any;
  public busySign : any;
    screenHeight : any;
    mainContentText2: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";




	constructor(private router: Router,private location: Location,private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef,private route: ActivatedRoute) {
		this.input = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
    }
    this.busySign="false";
    this.paramRoute1=route;
    this.orderId=this.paramRoute1.snapshot.params['orderId'];
this.screenHeight=screen.mainScreen.heightDIPs-400;


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

	


    mainContentText: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    
    onOpenDrawerTap() {
      this.drawer.showDrawer();
      this.mainContentText = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";       
    }



    onCloseDrawerTap() {
      this.busySign="true";
        this.drawer.closeDrawer();
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
          this.busySign="false";
            const result = response.content.toJSON();
              this.mainContentText=JSON.stringify(result); 
        }, (e) => {
            // >> (hide)
            console.log("Error: ");
            console.log(e);
            // << (hide)
        });

    }

	

	ngOnInit(): void {

	this.drawer = this.drawerComponent2.sideDrawer;
		console.log("Checkout");
	}

	public checkout() {
		console.log("Checkout");
	}

	public goBack() {
		this.location.back();
	}

	 
onItemTap(args: ItemEventData): void {
        
        console.log('Item with index: ' +this.countries[args.index].grid + ' tapped');
        this.router.navigate(["getdetails/"+this.countries[args.index].grid]);
    }

showModal() {
  this.busySign="true";
  this.router.navigate(["bank/"+this.orderId]);
}
	
    
    



}