import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Progress } from "tns-core-modules/ui/progress";
import { EventData } from "tns-core-modules/data/observable";
import { Router } from '@angular/router';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";


@Component({
    selector: "modal",
    styleUrls: ['./modal.component.css'],
    templateUrl: "./modal.component.html"   
})
export class ModalComponent implements OnInit {

    public progressValue: number;
    public orderId: any;
    public  countries:any[];
    public  searched:any[];
    public  locList:any[];
    screenHeight : any;
    public selectedLocation:any;
    public searchPhrase: string;
    public locationStr:String;
    public showelemSearch:String;
    public showelemLoc:String;
    public retVal:any="";
    
    ngOnInit() {
     this.progressValue = 25;
    }

    constructor(private params: ModalDialogParams,private router: Router) {
        this.orderId=params.context.orderId;
         this.showelemSearch="collapsed";
        this.showelemLoc="collapsed";
       
        this.countries=[
            
            {grid:"comments: 0", name: "Australia ,sadasd , asdas , dasdasdasd ,", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 1",name: "Australiazcxc zxczxcxz c zxc  ", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 2",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 3",name: "USA", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
            { grid:"comments: 4",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 5",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 6",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 7",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 8",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 9",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            {grid:"comments: 0", name: "Australia ,sadasd , asdas , dasdasdasd ,", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 1",name: "Australiazcxc zxczxcxz c zxc z x ", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 2",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 3",name: "USA", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
            { grid:"comments: 4",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 5",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 6",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 7",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 8",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
            { grid:"comments: 9",name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" }

       ]

       this.searched=[];
    }

    onValueChanged(args: EventData) {
        let progressBar = args.object as Progress;
        console.log("New value: " + progressBar.value);
    }

    close() {
    
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

        setTimeout(() => 
        {
            this.progressValue = 100;
        },11000);

        setTimeout(() => 
        {
            this.params.closeCallback();
           
        },14000);

         setTimeout(() => 
        {
          this.router.navigate(["bank/"+this.orderId]);
               
        },15000);


        

    }


    

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        this.searched=[
            {grid:"comments: 4",name: searchBar.text, imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"}
        ];
        console.log(`Searching for ${searchBar.text}`);
    }


    onLocSubmit(args) {
        const searchBar = args.object as SearchBar;
        this.locList=[
            {grid:"comments: 4",name: searchBar.text, imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"}
        ];
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        this.locList=[];
        this.showelemSearch="visible";
        this.showelemLoc="collapsed";
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
        let res = {name:searchBar.text};
        this.searched.push(res);
        
    }

    onLocationChanged(args){
        this.searched=[];
        this.showelemSearch="collapsed";
        this.showelemLoc="visible";
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
        let res = {name:searchBar.text};
        this.locList.push(res);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
        this.searched=[];
    }

    onClearLoc(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
        this.locList=[];
    }

    goHome(){
        console.log("Navigating to home");
		this.params.closeCallback( this.locationStr+"__"+this.searchPhrase);
    }
    
    setLocation(i){
        this.locationStr=i;
        this.locList=[];
        this.retVal=this.retVal+"_"+i+"_";
        console.log("Location -----"+ this.locationStr);
    }

    setSearchStr(i){
        this.searchPhrase=i;
        this.searched=[];
        this.retVal=this.retVal+"_"+i+"_";
        console.log("SearchPhrase -----"+  this.searchPhrase);
    }

    cleartList(){
        this.searched=[];
        this.locList=[];
    }
    
}


