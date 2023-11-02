import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { PopupcreateComponent } from '../popupcreate/popupcreate.component';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor(private router: Router, private dailog:MatDialog){}


  logout(){
    alert("logout page is successfully");
    this.router.navigateByUrl("/login");
  }

  openDialog() {
    this.dailog.open(PopupcreateComponent, {
    width: '40%',
    height: '60%'
    });
  }

  openpopup(){
    this.dailog.open(PopupComponent,{
      width: '40',
    })
  }
}
