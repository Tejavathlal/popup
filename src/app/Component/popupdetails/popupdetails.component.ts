import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-popupdetails',
  templateUrl: './popupdetails.component.html',
  styleUrls: ['./popupdetails.component.css']
})
export class PopupdetailsComponent implements OnInit {

  student: any = {};

  constructor(
    private studentdetails: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<PopupdetailsComponent>
  ) {}

  ngOnInit(): void {

    if (this.data && this.data.id) {
      const studentId = this.data.id;
      this.studentdetails.getstudentview(studentId).subscribe(
        (data: any) => {
          this.student = data;
        },
        (error: any) => {
          console.error('Error fetching student details:', error);
        }
      );
    }
    
  }

  closePopup() {
    this.ref.close();
  }

}
