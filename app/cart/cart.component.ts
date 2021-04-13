import { ViewChild } from "@angular/core";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Location } from "@angular/common";
import * as utils from "utils/utils";
import { isIOS, isAndroid ,screen,device} from "platform";
import * as Frame from "ui/frame";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";





@Component({
	selector: "cart-component",
	moduleId: module.id,
	templateUrl: "./cart.component.html",
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	

	
	public input: any;
    public counter: number = 0;
    public  countries:any[];
    public listPickerCountries:any[];
    public selectedListPickerIndex: number = 0;
    public orderTypes:any[];
    public searchPhrase: string;
    screenHeight : any;
    public paramRoute1:any;
    public amount:any;
    public receiptNumber:any;
    public busySign : any;
    public quantity: any;
    public modifiedArr:any[];
    public netPrice:any;


	constructor(private router: Router,private location: Location,private route: ActivatedRoute) {
        this.quantity=0;
        this.paramRoute1=route;
		this.input = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
    }
    this.busySign="false";

    this.amount=this.paramRoute1.snapshot.params['amount'];
    this.screenHeight=screen.mainScreen.heightDIPs-200;
    if(device.model==='iPhone' && device.osVersion==='12.0'){
        this.screenHeight=screen.mainScreen.heightDIPs-150;
    }
    this.receiptNumber="order_rcptid_"+Math.random();
    

    this.listPickerCountries = ["Select","Assamese","Bengali", "Chinese", "Punjabi", "Maharshtrian", "South Indian","Tibetan"];
    this.orderTypes=["Delevery","Take out"];
    this.countries=[
            
             {price:"10.00",grid:"comments: 0", name: "Australia ,sadasd , asdas , dasdasdasd ,", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 1",name: "Australiazcxc zxczxcxz c zxc  ", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 2",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:10},
             {price:"10.00", grid:"comments: 3",name: "USA", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" ,quantity:0},
             {price:"10.00", grid:"comments: 4",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 5",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 6",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 7",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 8",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 9",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00",grid:"comments: 0", name: "Australia ,sadasd , asdas , dasdasdasd ,", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 1",name: "Australiazcxc zxczxcxz c zxc z x ", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 2",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 3",name: "USA", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png",quantity:0 },
             {price:"10.00", grid:"comments: 4",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 5",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 6",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0},
             {price:"10.00", grid:"comments: 7",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png",quantity:0 },
             {price:"10.00", grid:"comments: 8",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png",quantity:0 },
             {price:"10.00", grid:"comments: 9",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" ,quantity:0}

        ];

        this.updatePrice();
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
    
    increment(i){
        this.countries[i].quantity++;
        this.updatePrice();
    }

    decrement(j){
        this.countries[j].quantity--;
        this.updatePrice();
    }

    remove(i){
        this.countries.splice(i,1);
        this.updatePrice();
    }

    updatePrice(){
        let totalPrice:any;
        let n:number;
        for(var k in this.countries){
            console.log("------------------------------------")
            
            let p:any = this.countries[k].price;
            console.log(p)
            n=+p;
            console.log(n)
            n+=n;
            totalPrice=n;
            console.log(totalPrice);
        }
        this.netPrice=totalPrice;

    }

	

    checkout(){
        this.busySign="true";
        setTimeout(() => 
        {
            request({
                url: "https://api.razorpay.com/v1/orders",
                method: "POST",
                headers: { "Content-Type": "application/json","Authorization": "Basic cnpwX3Rlc3RfSW0zNk1PamRlRmF6T1I6ZnVYSGkxUmFJSVU5aE1oVkxoQTc5M3JX"},
                content: JSON.stringify({"amount":this.amount,"currency":"INR","receipt":this.receiptNumber,"payment_capture":0})
                }).then((response) => {
                    this.busySign="false";
                    const result = response.content.toJSON();
                      console.log(JSON.stringify(result)); 
                      this.router.navigate(["checkout/"+result.id]); 
                }, (e) => {
                    // >> (hide)
                    console.log("Error: ");
                    console.log(e);
                    // << (hide)
                });
            
           
        },15000);
        
    }

	ngOnInit(): void {
        console.log("Cart");
    }

	public cart() {
		console.log("Cart");
	}

	public goHome() {
        console.log("going home");
		this.router.navigate(["/home"]);
	}

	 
    onItemTap(args: ItemEventData): void {    
        console.log('Item with index: ' +this.countries[args.index].grid + ' tapped');
        this.router.navigate(["getdetails/"+this.countries[args.index].grid]);
    }
	
    onCart(){
       console.log('Navigating to cart');
       this.router.navigate(["cart/8000"]);
    }
    
    search() {
       this.router.navigate(["/search"]);
    }
    



}