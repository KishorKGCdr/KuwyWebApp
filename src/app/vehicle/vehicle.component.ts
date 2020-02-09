import { Component, OnInit, ElementRef } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  selectedYear:number;
  selectedBrand:string;
  selectedModel:string;
  brandList:any;
  modelList:any;
  varientList:any;
  showBrandList:boolean=false;
  showModelList:boolean=false;
  showvariantList:boolean=false;
  price:number;
 age:number;
 selectedProfile:string;
 selectedMonthlyIncome:number;
 selectedLoanAmount:number;
 selectedDownPayment:number;
 selectedExistingEMI:number;
 selectedHouseType:string;
 selectedIncomeProof:Boolean;
 selectedGuarantor:number;
 selectedCustomerLocation:string;
 selectedVehicleType:number;
 selectedLocation:string;
 selectedVarients:string;
 selectedOwnerShip:number;
 vehicleCondition:number;
 payment:number;
 affordability:number;


 saveLoan=()=>{
  var dataObje={
    "vehicleType": this.selectedVehicleType,
    "mfgYear" :this.selectedYear,
    "brand" : this.selectedBrand,
    "model": this.selectedModel,
    "variant" :this.selectedVarients,
    "location" :this.selectedLocation,
    "ownerShip" : this.selectedOwnerShip,
    "vehicleCondition" : this.vehicleCondition,
    "vehiclePrice":this.price,
    "personAge" : this.age,
     "customerProfile" : this.selectedProfile,
     "loanAmount" :this.selectedLoanAmount,
     "maxDownPayment" : this.payment,
     "existEmi" : this.selectedExistingEMI,
  "affordability": this.affordability,
  "monthlyIncome":this.selectedMonthlyIncome,
    "customerHouseType" : this.selectedHouseType,
    "isHaveIncomeProof" : this.selectedIncomeProof,
     "guarantor" : this.selectedGuarantor,
     "cusLocationName" : this.selectedCustomerLocation



  }


  this.vehicleService.saveLoan(dataObje).subscribe((data)=>{
  
       alert("Loan Saved SuccessFully");

   })
 console.log(dataObje);

}


getAffordability=(value)=>{
  this.affordability=value;

}
isUsedVehicle=1;

vehCondition=(value)=>{
 if(value==='excellent'){
  this.vehicleCondition=1;
 }
 else if(value==='average'){
  this.vehicleCondition=3;
 }
 else if(value==='good'){
  this.vehicleCondition=2;
 }
 else if(value==='bad'){
  this.vehicleCondition=4;
 }



}

getSelectedVarients=(varients)=>{
  this.selectedVarients=varients;

}
  constructor(private vehicleService:VehicleService,private _elemntRef:ElementRef){ }

 

  getBrandsByYear=(value)=>{
   
    this.selectedYear=value
    this.showBrandList=true;
   this.vehicleService.getBrandByYear(value).subscribe((data)=>{
    this.brandList=data;
  })
}


getModelByBrand=(brand)=>{
   this.showModelList=true;
   this.selectedBrand=brand;
   this.vehicleService.getModelByBrand(brand,this.selectedYear).subscribe((data)=>{
    this.modelList=data;
  })
}



getvarientByBrandAndModelAndYear=(model)=>{
 
   this.selectedModel=model;
this.showvariantList=true;
  this.vehicleService.getvarientByBrandAndModelAndYear(this.selectedBrand,this.selectedYear,model).subscribe((data)=>{
       this.varientList=data;
  })
}
getSelectedLocaltion=(value)=>{
  alert(value);
   this.selectedLocation=value;
}
ownershipFun=(value)=>{


  if(value=='first'){
    this.selectedOwnerShip=1;    
    var first = <HTMLInputElement> document.getElementById("firstOwnership");
    first.checked=true;
    var second = <HTMLInputElement> document.getElementById("secondOwnership");
    second.checked=false;
    var third = <HTMLInputElement> document.getElementById("thirdOwnership");
    third.checked=false;
    var other = <HTMLInputElement> document.getElementById("otherOwnership");
    other.checked=false;
  }
  if(value=='second'){
    this.selectedOwnerShip=2;
    var first = <HTMLInputElement> document.getElementById("firstOwnership");
    first.checked=false;
    var second = <HTMLInputElement> document.getElementById("secondOwnership");
    second.checked=true;
    var third = <HTMLInputElement> document.getElementById("thirdOwnership");
    third.checked=false;
    var other = <HTMLInputElement> document.getElementById("otherOwnership");
    other.checked=false;
  }
  if(value=='third'){
    this.selectedOwnerShip=3;
    var first = <HTMLInputElement> document.getElementById("firstOwnership");
    first.checked=false;
    var second = <HTMLInputElement> document.getElementById("secondOwnership");
    second.checked=false;
    var third = <HTMLInputElement> document.getElementById("thirdOwnership");
    third.checked=true;
    var other = <HTMLInputElement> document.getElementById("otherOwnership");
    other.checked=false;
  }
  if(value=='other'){
    this.selectedOwnerShip=4;
    var first = <HTMLInputElement> document.getElementById("firstOwnership");
    first.checked=false;
    var second = <HTMLInputElement> document.getElementById("secondOwnership");
    second.checked=false;
    var third = <HTMLInputElement> document.getElementById("thirdOwnership");
    third.checked=false;
    var other = <HTMLInputElement> document.getElementById("otherOwnership");
    other.checked=true;
  } 
}


vehicleTypeFunc( val){
  if(val=='texi'){
    this.selectedVehicleType =2;
  }
  else 
  this.selectedVehicleType=1;
}


getCustomerProfile=(value)=>{
  this.selectedProfile=value;
}
getSelectedMonthlyIncome=(value)=>{
  this.selectedMonthlyIncome=value;
}
 
getSelectedLoanAmount=(value)=>{
  this.selectedLoanAmount=value;
  
}
getSelectedDownPayment=(value)=>{
  console.log("Payment is "+this.payment) ;
  this.selectedDownPayment=this.payment;
}
getSelectedExistingEMI=(value)=>{
  this.selectedExistingEMI=value;
}
getSelectedHouseType=(value)=>{
  this.selectedHouseType=value;
}
getSelectedIncomeProof=(value)=>{
  if(value="Yes")
      this.selectedIncomeProof=true;
  else
    this.selectedIncomeProof=false;
}
getSelectedGaurantor=(value)=>{
  this.selectedGuarantor=value;
}
getSelectedCustomerLocation=(value)=>{
  this.selectedCustomerLocation=value;
}

  ngOnInit() {
  }

 

}
