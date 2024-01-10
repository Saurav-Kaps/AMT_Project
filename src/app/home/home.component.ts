import { Component} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heading = 'Employee_Portal';
  Logo = './assets/Logo.png';
  Homepage = './assets/Home page.png';

  constructor(private dialog: MatDialog) { }

  openLoginDialog(userType:string): void {
    let title:string=''
    if(userType   === 'Employee'){
      title = 'Employee Login';
    }
    else if (userType  === 'Admin'){
      title = 'Admin Login';
    }
    const dialogRef=this.dialog.open(LoginComponent, {
      width: '300px',
      data: {title},
    });
}

}

