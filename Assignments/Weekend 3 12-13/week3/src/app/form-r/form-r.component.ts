import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-r',
  templateUrl: './form-r.component.html',
  styleUrls: ['./form-r.component.css']
})
export class FormRComponent implements OnInit {

  constructor() { }
  freeTrial!: any;

  onSubmit(){
    console.log(this.freeTrial);
  }
  get name() { return this.freeTrial.get('name'); }

  ngOnInit(): void {
    this.freeTrial = new FormGroup({
      name: new FormControl(this.freeTrial.name, [Validators.required]),
      lName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      pwd: new FormControl('',[Validators.required])

    })
  }

}
