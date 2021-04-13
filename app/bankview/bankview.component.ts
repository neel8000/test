import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { HtmlView } from "tns-core-modules/ui/html-view";
import * as fs from "tns-core-modules/file-system";
import { WebView , LoadEventData} from "tns-core-modules/ui/web-view";
import {Observable} from "tns-core-modules/data/observable";
import {Page} from "tns-core-modules/ui/page";
import { Router,ActivatedRoute } from '@angular/router';

import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";


@Component({
	selector: "Bankview",
	moduleId: module.id,
	templateUrl: "./bankview.component.html",
	styleUrls: ['./bankview.component.css']
})
export class BankviewComponent implements OnInit {
	public input: any;
	public htmlString: string;
	public webPreviewSrc : string = fs.knownFolders.currentApp().getFile("test.html").path;
	public orderId:any;
	public paramRoute1:any;
	public busySign : any;

	constructor(private location: Location,private route: ActivatedRoute,private router: Router) {
		this.input = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
		}
		this.busySign="true";
		this.paramRoute1=route;
		this.orderId=this.paramRoute1.snapshot.params['orderId'];
		this.htmlString = "<!DOCTYPE html>"+
		"<html>"+
		"<head>"+
		"<title>MyTitle</title>"+
		"<meta charset='utf-8' />"+
		"<style>"+
		".razorpay-payment-button { width: 100%;height: 50px;background: none #39bcff;border: 0; border-radius: 0px;color:white;font-size:16px;-webkit-border-radius:10px;-webkit-appearance: none; }"+
		"</style>"+
		"<script>"+
		"function closeWindow(){ window.close(); }"+
		"</script>"+
		"</head>"+
		"<body>"+
		"<span><b><font size='3' face='sans-serif'>"+
		"Declaration : By clicking 'confirm' button ,I agree with your terms and conditions.</font></b></span>"+
		"<span><font size='2' face='sans-serif'><p align='justify'>A mobile application, also referred to as a mobile app or simply an app, "+
		"is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch. Apps were originally intended for "+
		"productivity assistance such as email, calendar, and contact databases, but the public demand for apps caused rapid expansion into other areas such as "+
		"mobile games, factory automation, GPS and location-based services, order-tracking, and ticket purchases, so that there are now millions of apps available. "+
		"Apps are generally downloaded from application distribution platforms which are operated by the owner of the mobile operating system, such as the App Store (iOS) or "+
		"Google Play Store. Some apps are free, and others have a price, with the profit being split between the application's creator and the distribution platform. "+
		"Mobile applications often stand in contrast to desktop applications which are designed to run on desktop computers, and web applications which run in mobile "+
		"web browsers rather than directly on the mobile device.A mobile application, also referred to as a mobile app or simply an app, is a computer program or software "+
		"application designed to run on a mobile device such as a phone, tablet, or watch. Apps were originally intended for productivity assistance such as email, calendar, "+
		"and contact databases, but the public demand for apps caused rapid expansion into other areas such as mobile games, factory automation, GPS and location-based services,"+
		" order-tracking, and ticket purchases, so that there are now millions of apps available. Apps are generally downloaded from application distribution platforms which are "+
		"operated by the owner of the mobile operating system, such as the App Store (iOS) or Google Play Store. Some apps are free, and others have a price, with the profit being "+
		"split between the application's creator and the distribution platform. </p><p align='justify'>Mobile applications often stand in contrast to desktop applications which are designed to run on desktop "+
		"computers, and web applications which run in mobile web browsers rather than directly on the mobile device.A mobile application, also referred to as a mobile app or simply an "+
		"app, is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch. Apps were originally intended for productivity"+
		" assistance such as email, calendar, and contact databases, but the public demand for apps caused rapid expansion into other areas such as mobile games, factory automation,"+
		" GPS and location-based services, order-tracking, and ticket purchases, so that there are now millions of apps available. Apps are generally downloaded from application "+
		"distribution platforms which are operated by the owner of the mobile operating system, such as the App Store (iOS) or Google Play Store. Some apps are free, and others "+
		"have a price, with the profit being split between the application's creator and the distribution platform. Mobile applications often stand in contrast to desktop "+
		"applications which are designed to run on desktop computers, and web applications which run in mobile web browsers rather than directly on the mobile device.A mobile"+
		" application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a phone,"+
		" tablet, or watch. </p><p align='justify'>Apps were originally intended for productivity assistance such as email, calendar, and contact databases, but the public demand for apps caused "+
		"rapid expansion into other areas such as mobile games, factory automation, GPS and location-based services, order-tracking, and ticket purchases, so that there are "+
		"now millions of apps available. Apps are generally downloaded from application distribution platforms which are operated by the owner of the mobile operating system, "+
		"such as the App Store (iOS) or Google Play Store. Some apps are free, and others have a price, with the profit being split between the application's creator and the "+
		"distribution platform. Mobile applications often stand in contrast to desktop applications which are designed to run on desktop computers, and web applications which "+
		"run in mobile web browsers rather than directly on the mobile device.A mobile application, also referred to as a mobile app or simply an app, is a computer program or "+
		"software application designed to run on a mobile device such as a phone, tablet, or watch. Apps were originally intended for productivity assistance such as email, "+
		"calendar, and contact databases, but the public demand for apps caused rapid expansion into other areas such as mobile games, factory automation, GPS and location-based "+
		"services, order-tracking, and ticket purchases, so that there are now millions of apps available.</p><p align='justify'> Apps are generally downloaded from application distribution platforms "+
		"which are operated by the owner of the mobile operating system, such as the App Store (iOS) or Google Play Store. Some apps are free, and others have a price, with the "+
		"profit being split between the application's creator and the distribution platform. Mobile applications often stand in contrast to desktop applications which are designed "+
		"to run on desktop computers, and web applications which run in mobile web browsers rather than directly on the mobile device.A mobile application, also referred to as a "+
		"mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch. Apps were originally "+
		"intended for productivity assistance such as email, calendar, and contact databases, but the public demand for apps caused rapid expansion into other areas such as mobile "+
		"games, factory automation, GPS and location-based services, order-tracking, and ticket purchases, so that there are now millions of apps available.</p><p align='justify'> Apps are generally "+
		"downloaded from application distribution platforms which are operated by the owner of the mobile operating system, such as the App Store (iOS) or Google Play Store. "+
		"Some apps are free, and others have a price, with the profit being split between the application's creator and the distribution platform. Mobile applications often stand "+
		"in contrast to desktop applications which are designed to run on desktop computers, and web applications which run in mobile web browsers rather than directly on the mobile "+
		"device.A mobile application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a "+
		"phone, tablet, or watch. Apps were originally intended for productivity assistance such as email, calendar, and contact databases, but the public demand for apps caused "+
		"rapid expansion into other areas such as mobile games, factory automation, GPS and location-based services, order-tracking, and ticket purchases, so that there are now "+
		"millions of apps available. Apps are generally downloaded from application distribution platforms which are operated by the owner of the mobile operating system, such as "+
		"the App Store (iOS) or Google Play Store. Some apps are free, and others have a price, with the profit being split between the application's creator and the distribution "+
		"platform. Mobile applications often stand in contrast to desktop applications which are designed to run on desktop computers, and web applications which run in mobile web "+
		"browsers rather than directly on the mobile device.</p></font></span>"+
		"<form action='#'  method='POST'><input type='hidden' custom='Hidden Element' name='hidden'><script src='https://checkout.razorpay.com/v1/checkout.js' "+
		"data-key='rzp_test_Im36MOjdeFazOR'  "+
		"data-amount='50000' "+
		"data-currency='INR' "+
		"data-order_id='"+this.orderId+"' "+
		"data-buttontext='Confirm' "+
		"data-name='Acme Corp' "+
		"data-description='Test transaction' data-image='https://example.com/your_logo.jpg' "+
		"data-prefill.name='Gaurav Kumar' "+
		"data-prefill.email='gaurav.kumar@example.com' "+
		"data-prefill.contact='9999999999' "+
		"data-theme.color='#F37254'>"+
		"</script>"+
		"</form>"+
		"</body>"+
		"</html>";


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



	public loadFinished(args: LoadEventData){

		this.busySign="false";
		console.log("loadFinishedEvent called");
		console.log(args.url);
		if(args.url.indexOf("https://api.razorpay.com/v1/checkout/onyx")!=-1){
			this.router.navigate(["orderprocessdetails"]); 
		}
	}


	public propertyChangeEvent(args: LoadEventData){
		console.log("Layout change called");
		console.log(args);
		
	}

	

	public goBack() {
		this.location.back();
	}

	
}

