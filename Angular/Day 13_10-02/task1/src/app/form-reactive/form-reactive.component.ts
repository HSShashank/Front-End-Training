import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  constructor() { }
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'fname': new FormControl('',[Validators.required]),
      'lname': new FormControl(''),
      'age': new FormControl(''),
      'email': new FormControl('',Validators.email),
      'address': new FormGroup({
        'state': new FormControl(''),
        'pincode': new FormControl('')
      }
      )
    })
  }
  onSubmit(){
    console.log(this.form);
  }

}
