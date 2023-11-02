import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {

  student: any=[]
  id: number = 0;

  constructor(private studentdetails:StudentService, private activatedRoute:ActivatedRoute,){

    activatedRoute.params.subscribe(
      (data:any)=>{
       this.id= data.id;
       
       studentdetails.getstudentview(this.id).subscribe(
        (data:any)=>{
          this.student=data;
        }
       )
      }
    )
  }

  

}
