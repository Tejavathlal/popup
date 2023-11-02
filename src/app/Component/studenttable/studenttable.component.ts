import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { CreateformComponent } from '../createform/createform.component';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.css']
})
export class StudenttableComponent {
  
  displayedColumns: string[] = ['id', 'name', 'gender', 'mobile', 'batch', 'district', 'state', 'location', 'package', 'action'];

  dataSource = new MatTableDataSource<any>();
  term: string = "";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studentService: StudentService,private activatedRoute:ActivatedRoute, private router:Router, private dailog:MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadstudentData();
  }

  applyFilter() {
    this.dataSource.filter = this.term.trim().toLocaleLowerCase();
  }

  loadstudentData() {
    this.studentService.getStudent().subscribe(
      (data: any) => {
        this.dataSource.data = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }

  delete(id: number) {
    this.studentService.deletestudent(id).subscribe(
      (data: any) => {
        alert("Delete Successfully");
        location.reload();
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
    view(id:number){
      this.router.navigateByUrl("/dashboard/studentdetails/" +id)
    }

    edit(id:number){
      this.router.navigateByUrl("/dashboard/edit-student/" +id)
      
    }
    openpopup(){
      this.dailog.open(CreateformComponent,{
        width: '500px',
        height: '500Px',
        disableClose: false,
        enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms'
      });
    }
}
