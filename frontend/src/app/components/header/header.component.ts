import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  seeMenu : boolean = true;
  activeProfile: string = '';

  constructor( private cookieService: CookieService) { }

  ngOnInit(): void {
    let str = this.cookieService.get('User');
    this.activeProfile = str.charAt(0).toUpperCase() + str.slice(1);
  }

  openMenu() {
    this.seeMenu = this.seeMenu ? false : true; 
  }
}
