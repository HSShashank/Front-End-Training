import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {
  data:any;
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => console.log(data));
  }
  
}
