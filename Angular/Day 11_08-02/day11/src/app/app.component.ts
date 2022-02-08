import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day11';
  val = true;
  toggle(){
    if(this.val)
    {
      this.val=false;
    }
    else
    {
      this.val=true;
    }
  }
}


// const btn = document.getElementById("share-btn");
// const shareOpt = document.getElementById("share");
// btn.addEventListener("click", () => {
//     return shareOpt.classList.toggle("show");
// });