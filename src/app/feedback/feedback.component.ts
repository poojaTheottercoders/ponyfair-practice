import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FeedbackModel} from './feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedBack: FormGroup;

  services: FeedbackModel[] = [
    {
      id: 1,
      name: 'dhdgghdh',
    },
    {
      id: 2,
      name: 'hgtyjhf',
    },
    {
      id: 3,
      name: 'fdgjytd',
    },
    {
      id: 4,
      name: 'fdgjytd',
    },
    {
      id: 5,
      name: 'fdgjytd',
    }
  ];

  options: string[] = ['Excellent', 'Good', 'Can be improved'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.feedBack = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      serviceName: ['', Validators.required],
      giveRate: ['', Validators.required],
      review: ['', Validators.required]
    });
  }

  submit(): void {
    console.log(this.feedBack);
  }

  get fName() {
    return this.feedBack.get('fName');
  }
  get lName() {
    return this.feedBack.get('lName');
  }

  get giveRate() {
    return this.feedBack.get('giveRate');
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyIdentifier || event.key || event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
