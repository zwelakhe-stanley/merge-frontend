import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MergeApiService } from 'src/app/merge-api.service';


@Component({
  selector: 'app-display-accounts',
  templateUrl: './display-accounts.component.html',
  styleUrls: ['./display-accounts.component.css'],
  providers: [MergeApiService, HttpClientModule]
})
export class DisplayAccountsComponent {

  getMergeDetails = {email: "", phone: ""}

  mergeData = {
    "email": "string",
    "phoneNumber": "string",
    "bikeIDKeep": 0,
    "bikeIDUnlink": 0,
    "userIDKeep": 0,
    "userIDUnlink": 0
  }

  mergeDetails$! :Observable <any[]>;
  mergeDetails :any=[];

  public show:boolean = false;
  public buttonName:any = 'Show';

  
  UserDetails :any=[];

  form: FormGroup;
 
  
  constructor(private service: MergeApiService, public fb: FormBuilder ) {
    this.form = this.fb.group({
      email: [''],
      phoneNumber:[''],
      userIdKeep: [''],
      userIdUnlink:[''], 
      bikeIDUnlink:[''],
      bikeIDKeep:[''],
      identifier1:[''],
      identifier2:['']
    });
   }

   ngOnInit(){}

   submitForm(){
    let formDataEmail: any = new FormData();
    let formDataPhone: any = new FormData();

    let formDataIdentifier1: any = new FormData();
    let formDataIdentifier2: any = new FormData();
    formDataIdentifier1.append('identifier1', this.form.get('identifier1')?.value);
    formDataIdentifier2.append('identifier2', this.form.get('identifier2')?.value);

    
    
    console.log(Object.fromEntries(formDataIdentifier1))
    console.log(Object.fromEntries(formDataIdentifier2))

    this.service.getMergeDetailsP(formDataIdentifier1.get('identifier1'), formDataIdentifier2.get('identifier2')).subscribe((result)=>
      {
        this.show = !this.show;

        this.mergeDetails = result
        console.log(result)
      });

   }



   submitMergeForm() {

    let formDataKeptUser: any = new FormData();
    let formDataUnlinkedUser: any = new FormData();
    let formDatabikeIDKeep: any = new FormData();
    let formDatabikeIDUnlink: any = new FormData();
    let formDataEmail: any = new FormData();
    let formDataPhone: any = new FormData();

    formDataKeptUser.append('userIdKeep', this.form.get('userIdKeep')?.value)
    formDataUnlinkedUser.append('userIdUnlink', this.form.get('userIdUnlink')?.value)
    formDatabikeIDKeep.append('bikeIDKeep', this.form.get('bikeIDKeep')?.value)
    formDatabikeIDUnlink.append('bikeIDUnlink', this.form.get('bikeIDUnlink')?.value)
    formDataEmail.append('email', this.form.get('email')?.value);
    formDataPhone.append('phoneNumber', this.form.get('phoneNumber')?.value);

    this.mergeData = {
      "email": formDataEmail.get('email'),
      "phoneNumber": formDataPhone.get('phoneNumber'),
      "userIDKeep": formDataKeptUser.get('userIdKeep'),
      "userIDUnlink": formDataUnlinkedUser.get('userIdUnlink'),
      "bikeIDKeep": formDatabikeIDKeep.get('bikeIDKeep'),
      "bikeIDUnlink": formDatabikeIDUnlink.get('bikeIDUnlink')
    }
  
    
    console.log(this.mergeData)
    this.service.mergeAccounts(this.mergeData).subscribe((mergeData)=>
    {
      console.log(mergeData)
    });

    
   }


















  //ngOnInit(): void {
  //  this.service.getUser("?email=mark@egconline.co.za").subscribe(result=>
  //    {
  //      this.UserDetails = result
  //      console.log(result)
  //    });

 // function onsubmit(){
  //    this.service.getMergeDetails(this.getMergeDetails).subscribe(re =>{
  //      this.mergeDetails = re
  //      console.log(re)
   // });



      

  
  

}

