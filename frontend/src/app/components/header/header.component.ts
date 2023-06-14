import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  seeMenu : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.seeMenu = this.seeMenu ? false : true; 
  }
}
