import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public showContent: boolean = false;

  constructor() { }

  ngOnInit() {
  	setTimeout(()=>this.showContent=true, 500);
  }

}
