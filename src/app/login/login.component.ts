import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private router: Router) { }
  onSignIn() {
        this.router.navigate(['dashboard']);
        this.dialogRef.close();
  }
  
}


