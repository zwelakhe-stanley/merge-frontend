import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MergeApiService {

  readonly mergeAPIUrl = "https://localhost:7190/api";

  constructor(private httpClient:HttpClient) { }

  //Merge Details
  getMergeDetailsP(Identifier1? :any, Identifier2? : any):Observable<any[]>
  {
    //if(Email != null && PhoneNumber !=null)
    //{
   //   return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_SP_MergeView_Result' +"?email=" + Email + "&PhoneNumber=" + PhoneNumber )
   // }
   // else if(PhoneNumber != null && Email == null)
   // {
   //   return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_SP_MergeView_Result' +"?phoneNumber=" + PhoneNumber )
   // }
   // else{
   //   return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_SP_MergeView_Result' +"?email=" + Email )
   // }


    if(Identifier1 != null && Identifier2 == ' ')
    {
      return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_SP_MergeView_Result' + "?identifier1=" + Identifier1)
      
    }
    else if (Identifier2 != null && Identifier1 == ' ')
    {
      return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_SP_MergeView_Result' + "?identifier2=" + Identifier2)
    }
    else 
    {
      return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_SP_MergeView_Result' + "?identifier1=" + Identifier1 +"&identifier2=" + Identifier2)

    }

  }
  

  getMergeDetails(getMergeDetails: {mail? :string, phone? : string}):any
  {
    return this.httpClient.post<any>(this.mergeAPIUrl + '/HUB_SP_MergeView_Result', getMergeDetails)

  }



  //MERGE
  mergeDetails(data: any):Observable<any[]>
  {
    return this.httpClient.put<any>(this.mergeAPIUrl + '/HUB_SP_Merge', data )
  }

  getUserIDFromResults(userID: number)
  {
    return this.httpClient.get<any>(this.mergeAPIUrl + `/HUB_MMS_T_User/'${userID}`)

  }

  //MERGE WITH POST FROM SP
  mergeAccounts(mergeData: {email : string, phoneNumber : string, userIDKeep : number, userIDUnlinked? : number, bikeIDKept? : number, bikeIDUnlinked? : number}):Observable<any[]>
  {
    return this.httpClient.post<any>(this.mergeAPIUrl + '/HUB_SP_Merge', mergeData)
  }


  //Bike
  getBike():Observable<any[]>
  {
    return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_MMS_T_Bike');
  }

  updateBike(id:number|string , data:any)
  {
    return this.httpClient.put(this.mergeAPIUrl + '/HUB_MMS_T_Bike/${id}', data)
  }

  //Partner
  getPartner():Observable<any[]>
  {
    return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_MMS_T_Partner')
  }

  //partner cyclist link
  getPartnerCyclistlink():Observable<any[]>
  {
    return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_MMS_T_PartnerCyclistLink')
  }

  //partner message 
  getPartnerMessage():Observable<any[]>
  {
    return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_MMS_T_PartnerMessage')
  }

  updatePartnerMessage(id:number|string , data:any)
  {
    return this.httpClient.put(this.mergeAPIUrl + `/HUB_MMS_T_PartnerMessage/${id}`, data)
  }

  //service
  getService():Observable<any[]>
  {
    return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_MMS_T_Service')
  }

  updateService(id:number|string , data:any)
  {
    return this.httpClient.put(this.mergeAPIUrl + `/HUB_MMS_T_Service/${id}`, data)
  }

  //User
  getUser(Email: string):Observable<any[]>
  {
    return this.httpClient.get<any>(this.mergeAPIUrl + '/HUB_MMS_T_User' + Email)
  }

 


  updateUser(id:number|string , data:any)
  {
    return this.httpClient.put(this.mergeAPIUrl + `/HUB_MMS_T_User/${id}`, data)
  }



}
