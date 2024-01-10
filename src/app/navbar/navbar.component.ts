import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  heading = 'Employee_Portal';
  Logo = './assets/Logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
