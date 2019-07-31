import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {

  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.inputForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      contactNo: ['', [Validators.minLength(10), Validators.maxLength(13), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      inquiry: ['', Validators.required],
    });
  }

  submit(): void {
    console.log(this.inputForm);
  }

  get fName() {
    return this.inputForm.get('fName');
  }
  get lName() {
    return this.inputForm.get('lName');
  }

  get email() {
    return this.inputForm.get('email');
  }

  get contactNo() {
    return this.inputForm.get('contactNo');
  }

  get inquiry() {
    return this.inputForm.get('inquiry');
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyIdentifier || event.key || event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}
