import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { CreateformComponent } from './Component/createform/createform.component';
import { StudenttableComponent } from './Component/studenttable/studenttable.component';
import { MaterialModule } from './AngularMaterial/material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentdetailsComponent } from './Component/studentdetails/studentdetails.component';
import { PopupcreateComponent } from './Component/popupcreate/popupcreate.component';
import { PopuptableComponent } from './Component/popuptable/popuptable.component';
import { PopupComponent } from './Component/popup/popup.component';
import { PopupdetailsComponent } from './Component/popupdetails/popupdetails.component';
import { CheckboxComponent } from './checkbox/checkbox.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateformComponent,
    StudenttableComponent,
    StudentdetailsComponent,
    PopupcreateComponent,
    PopuptableComponent,
    PopupComponent,
    PopupdetailsComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
