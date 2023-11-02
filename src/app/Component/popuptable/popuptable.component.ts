import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from 'src/app/Services/student.service';
import { PopupcreateComponent } from '../popupcreate/popupcreate.component';
import { StudentdetailsComponent } from '../studentdetails/studentdetails.component';
import { PopupdetailsComponent } from '../popupdetails/popupdetails.component';

@Component({
  selector: 'app-popuptable',
  templateUrl: './popuptable.component.html',
  styleUrls: ['./popuptable.component.css']
})
export class PopuptableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'gender', 'mobile', 'batch', 'district', 'state', 'location', 'package', 'action'];

  dataSource = new MatTableDataSource<any>();

  term: string="";

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dailog: MatDialog, private popuptable: StudentService) { }



  ngOnInit(): void {
    this.getcreatetable()

  }
  applyFilter() {
    this.dataSource.filter = this.term.trim().toLocaleLowerCase();
  }

  edit(row:any){
    this.dailog.open(PopupcreateComponent,{
      width: '40%',
      height: "60%",
      data: row
    }).afterClosed().subscribe(
      (data:any)=>{
        if(data === "Udated"){
          this.getcreatetable();
        }
      }
    )
  }

  getcreatetable() {
    this.popuptable.getStudent().subscribe(
      (data: any) => {
        this.dataSource.data=data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
     (err:any)=>{
      alert("Internal Server Error");
     }
    )
  }
  delete(id:number){
   this.popuptable.deletestudent(id).subscribe(
    (data:any)=>{
      alert("Delete Successfully");
      location.reload();
    },
    (err:any)=>{
      alert("Internal Server Error");
    }
   )
  }
   view(row:any){
    this.dailog.open(PopupdetailsComponent,{
      width: "50%",
      data: row
    });

   }
}
