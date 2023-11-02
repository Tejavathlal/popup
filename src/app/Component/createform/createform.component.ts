import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent {

  states = [] = [
    { value: 'state-0', viewValue: 'Telangana' },
    { value: 'state-1', viewValue: 'Andhra Pradesh' },
    { value: 'state-2', viewValue: 'Tamil Nadu' },
  ];

  id: number = 0

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    batch: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      mandal: new FormControl(),
      district: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl()
    }),
    sourceType: new FormControl(),
    sourceForm: new FormControl(),
    referralName: new FormControl(),

    company: new FormGroup({
      name: new FormControl(),
      location: new FormControl(),
      package: new FormControl(),
      offerDate: new FormControl()
    }),

    education: new FormArray([])
  });

  get educationFormCard() {
    return this.studentForm.get('education') as FormArray;
  }

  addEducation() {
    this.educationFormCard.push(
      new FormGroup({
        qualification: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl()
      })
    )
  }
  clearForm() {
    this.studentForm.reset({
      name: '',
      gender: '',
      mobile: '',
      email: '',
      batch: '',
      address: {
        city: '',
        mandal: '',
        district: '',
        state: '',
        pincode: ''
      },
      sourceType: '',
      sourceForm: '',
      referralName: '',
      company: {
        name: '',
        location: '',
        package: '',
        offerDate: ''
      },
      education: []
    });
  }

  constructor(private studentservice: StudentService, private activatedRoute: ActivatedRoute)  {

    activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        studentservice.getstudentview(this.id).subscribe(
          (data: any) => {
            this.studentForm.patchValue(data);
          }
        )
      }


    )
  }
  onSubmit() {
    if (this.id) {
      this.studentservice.updatestudent(this.id, this.studentForm.value).subscribe(
        (data: any) => {
          alert("Update successfully");
        },
        (err: any) => {
          alert("Internal Server Error");
        }
      )
    }
    else {
      console.log(this.studentForm)
      this.studentservice.createstudent(this.studentForm.value).subscribe(
        (data: any) => {
          alert("Student Create Successfully");
        },
        (err: any) => {
          alert("Internal Server Error")
        }
      )
    }
  }

  removeEducation(i: number) {
    this.educationFormCard.removeAt(i);
  }

  

}
