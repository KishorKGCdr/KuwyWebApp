import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({

  providedIn: 'root'
})
export class VehicleService {

 constructor(private _http:HttpClient) {
  console.log('ceated VehicleService');
 } 


 saveLoan=(dataObje)=>{
   console.log(dataObje);
  return this._http.post("http://localhost:8080/KuwyApp/api/v1/vehicle/savingData.lef",dataObje);

}

 getBrandByYear=(year)=>{
   return this._http.get("http://localhost:8080/KuwyApp/api/v1/vehicle/getBrandByMfgYear.lef?mfgYear="+year)
 }

 getModelByBrand=(brand,year)=>{
  return this._http.get("http://localhost:8080/KuwyApp/api/v1/vehicle/getModelByBrandAndYear.lef?mfgYear="+year+"&brand="+brand)
 }

 getvarientByBrandAndModelAndYear=(brand,year,model)=>{
  return this._http.get("http://localhost:8080/KuwyApp/api/v1/vehicle/getVariantByBrandNYearNModel.lef?mfgYear="+year+"&brand="+brand+"&model="+model)
 }
 
}
