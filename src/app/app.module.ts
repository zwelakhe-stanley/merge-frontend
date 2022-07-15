import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MergingComponent } from './merging/merging.component';
import { DisplayAccountsComponent } from './merging/display-accounts/display-accounts.component';
import { MergeAccountsComponent } from './merging/merge-accounts/merge-accounts.component';

import { MergeApiService } from './merge-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MergingComponent,
    DisplayAccountsComponent,
    MergeAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MergeApiService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
