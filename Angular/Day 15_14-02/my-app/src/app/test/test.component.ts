import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from '../provide-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(service:ProvideDataService) {
    this.data = service.getData();
   }
  data:any;


  ngOnInit(): void {
  }

}
