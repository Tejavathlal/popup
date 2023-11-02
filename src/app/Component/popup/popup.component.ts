import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  
  states = [
    { value: 'state-0', viewValue: 'Telangana' },
    { value: 'state-1', viewValue: 'Andhra Pradesh' },
    { value: 'state-2', viewValue: 'Tamil Nadu' },
  ];

  studentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private popupService: StudentService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    private dialogRef: MatDialogRef<PopupComponent>
  ) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      students: this.formBuilder.array([]), // Create an array of students
    });

    if (this.editdata) {
      // Loop through your editdata array and add students to the form array
      for (const student of this.editdata) {
        this.addStudent(student);
      }
    }
  }

  addStudent(studentData: any) {
    const studentGroup = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      batch: [''],
      gender: [''],
      address: this.formBuilder.group({
        city: [''],
        mandal: [''],
        district: [''],
        pincode: [''],
        state: ['']
      }),
      sourceType: [''],
      sourceForm: [''],
      referralName: [''],
      company: this.formBuilder.group({
        name: [''],
        location: [''],
        package: [''],
        offerDate: ['']
      }),
      education: this.formBuilder.array([]),
    });

    // Populate the studentGroup with data
    studentGroup.patchValue(studentData);

    // Add the student group to the form array
    const studentsArray = this.studentForm.get('students') as FormArray;
    studentsArray.push(studentGroup);
  }

  // Rest of your code...

  get educationcards() {
    return this.studentForm.get('students') as FormArray;
  }

  addEducation(studentGroup: FormGroup) {
    const educationArray = studentGroup.get('education') as FormArray;
    educationArray.push(this.formBuilder.group({
      qualification: [''],
      year: [''],
      percentage: ['']
    }));
  }

  removeEducation(studentGroup: FormGroup, index: number) {
    const educationArray = studentGroup.get('education') as FormArray;
    educationArray.removeAt(index);
  }

  onSubmit() {
    // Handle form submission here
    this.popupService.createstudent(this.studentForm.value).subscribe(
      (data: any) => {
        alert("Created Add SuccessFully");
        this.studentForm.reset();
        this.dialogRef.close('save');
      },
      (err: any) => {
        alert("Created Failed");
      }
    )
  }

}


