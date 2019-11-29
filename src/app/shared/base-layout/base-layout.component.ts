import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();

  constructor(private cookieService: CookieService, private router: Router) {

  }

  ngOnInit() {
  }

  logout() {

    this.cookieService.set(null,null,null);
    this.router.navigate(['/session/signin']);



  }

}
