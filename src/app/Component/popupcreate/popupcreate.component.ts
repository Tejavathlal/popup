import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-popupcreate',
  templateUrl: './popupcreate.component.html',
  styleUrls: ['./popupcreate.component.css']
})
export class PopupcreateComponent implements OnInit {
  states = [
    { value: 'state-0', viewValue: 'Telangana' },
    { value: 'state-1', viewValue: 'Andhra Pradesh' },
    { value: 'state-2', viewValue: 'Tamil Nadu' },
  ];

  studentForm!: FormGroup;
  actionbtn: string = "save"
  id:number = 0;

  constructor(private formBuilder: FormBuilder,
    private popupService: StudentService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    private dialogRef: MatDialogRef<PopupcreateComponent>) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
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
    console.log(this.editdata)
    // if(this.editdata){
    //   this.studentForm.controls['name'].setValue(this.editdata.name);
    //   this.studentForm.controls['email'].setValue(this.editdata.email);
    //   this.studentForm.controls['mobile'].setValue(this.editdata.mobile);
    //   this.studentForm.controls['batch'].setValue(this.editdata.batch);
    //   this.studentForm.controls['gender'].setValue(this.editdata.gender);
    //   this.studentForm.controls['mandal'].setValue(this.editdata.mandal); 
    //   this.studentForm.controls['city'].setValue(this.editdata.city); 

    // }


    if (this.editdata) {
      this.actionbtn = "update"
      this.studentForm.patchValue({
        name: this.editdata.name,
        email: this.editdata.email,
        mobile: this.editdata.mobile,
        batch: this.editdata.batch,
        gender: this.editdata.gender,
      });
    }

    const addressGroup = this.studentForm.get('address');
    if (addressGroup) {

      addressGroup.patchValue({
        city: this.editdata.address.city,
        mandal: this.editdata.address.mandal,
        district: this.editdata.address.district,
        pincode: this.editdata.address.pincode,
        state: this.editdata.address.state,
      });
    }

    this.studentForm.patchValue({

      sourceType: this.editdata.sourceType,
      sourceForm: this.editdata.sourceForm,
      referralName: this.editdata.referralName,
    });

    const companyGroup = this.studentForm.get('company');
    if (companyGroup) {
      companyGroup.patchValue({

        name: this.editdata.company.name,
        location: this.editdata.company.location,
        package: this.editdata.company.package,
        offerDate: this.editdata.company.offerDate,
      });
    }
    if (this.editdata) {
      // Assuming editdata contains an 'education' property which is an array
      const educationArray = this.editdata.education;

      if (educationArray && educationArray.length > 0) {
        educationArray.forEach((educationItem: any) => {
          this.addEducation(educationItem);
        });
      }
    }
  }

  addEducation(educationItem: any = null) {
    this.educationcards.push(this.formBuilder.group({
      qualification: [educationItem ? educationItem.qualification : ''],
      year: [educationItem ? educationItem.year : ''],
      percentage: [educationItem ? educationItem.percentage : '']
    }));




  }

  get educationcards() {
    return this.studentForm.get('education') as FormArray;
  }

  // addEducation() {
  //   this.educationcards.push(this.formBuilder.group({
  //     qualification: [''],
  //     year: [''],
  //     percentage: ['']

  //   }));
  // }

  removeEducation(index: number) {
    this.educationcards.removeAt(index);
  }

  onSubmit() {
    // Handle form submission here
    // console.log(this.studentForm.value);
    if(this.id ){

      this.popupService.updatestudent(this.id,this.studentForm).subscribe(
        (data:any)=>{
          alert("Updated Successfully");
        },
        (err:any)=>{
          alert("Updated Failed");
        }
      )

    }
    else{
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
}
