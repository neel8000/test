import { Component, OnInit,NgZone ,ViewChild} from "@angular/core";
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { Progress } from "tns-core-modules/ui/progress";
import { EventData } from "tns-core-modules/data/observable";
import { isAndroid, isIOS } from "tns-core-modules/platform";
import * as Geolocation from "nativescript-geolocation";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk";
import { registerElement } from 'nativescript-angular/element-registry';
import { Accuracy } from "tns-core-modules/ui/enums";

registerElement('MapView', () => MapView);

@Component({
	selector: "OrderProcessDetails",
	moduleId: module.id,
	templateUrl: "./orderprocessdetails.component.html",
	styleUrls: ['./orderprocessdetails.component.css']
})
export class OrderProcessDetailsComponent implements OnInit {
	public input: any;
	public progressValue: number;
	public latitude: number ;
    public longitude: number;
    private watchId: number;
   
    zoom = 8;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: String;

    

	constructor(private location: Location,private router: Router,private zone: NgZone) {

        Geolocation.enableLocationRequest();

        Geolocation.getCurrentLocation({desiredAccuracy :Accuracy.high,maximumAge:5000,timeout:20000})
        .then(result=>{
            console.log("-------------------");
            console.log(result);
            this.latitude = result.latitude;
            this.longitude = result.longitude;
            console.log("-------------------");
        });
        
		
		setTimeout(() => 
        {
            this.progressValue = 50;
        },
        5000);

        setTimeout(() => 
        {
           this.progressValue = 75;
        },
        8000);
		this.input = {
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
        }

        
   

        

       
	}

	

	onValueChanged(args: EventData) {
        let progressBar = args.object as Progress;
        console.log("New value: " + progressBar.value);
    }

	ngOnInit(): void {
		console.log("reg1");
	}

	

	goHome():void{
		this.router.navigate(["/home"]);
	}

	checkout(){
        this.router.navigate(["checkout"]); 
	}
	
	private getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            Geolocation.enableLocationRequest().then(() => {
                Geolocation.getCurrentLocation({timeout: 10000}).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }

    public updateLocation() {
        this.getDeviceLocation().then(result => {
            this.latitude = result.latitude;
            this.longitude = result.longitude;
        }, error => {
            console.error(error);
        });
    }

    public startWatchingLocation() {
        this.watchId = Geolocation.watchLocation(location => {
            if(location) {
                this.zone.run(() => {
                    this.latitude = location.latitude;
                    this.longitude = location.longitude;
                });
            }
        }, error => {
            console.log(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000 });
    }

    public stopWatchingLocation() {
        if(this.watchId) {
            Geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    }


    onMapReady(event) {
        Geolocation.enableLocationRequest();

        Geolocation.getCurrentLocation({desiredAccuracy :Accuracy.high,maximumAge:5000,timeout:20000})
        .then(result=>{
            console.log("-------------------");
            console.log(result);
            this.latitude = result.latitude;
            this.longitude = result.longitude;
            console.log("-------------------");
        });
        console.log('Map Ready');
        this.mapView = event.object;
        console.log("Setting a marker...");
        var marker = new Marker();
        console.log("Latitude---- "+ this.latitude + "----Longitude -----  "+ this.longitude);
        marker.position = Position.positionFromLatLng(this.latitude, this.longitude);
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }

    onCoordinateTapped(args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

    onCameraMove(args) {
        console.log("Camera moving: " + JSON.stringify(args.camera));
    }


}





