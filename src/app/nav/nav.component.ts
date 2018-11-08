import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Free Cook Book';

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  showAll() {
  	this.data.showAllMeals = true; 
  }

 
}
