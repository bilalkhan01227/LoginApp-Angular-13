import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  UserName:any;
  Password:any;

  isLoginError : boolean = false;
  constructor
  (private userService : UserService,
  private router : Router,
  private snackBar:MatSnackBar) { }



  ngOnInit(): void {
  }

  OnSubmit(userName: any,password: any){
    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
     localStorage.setItem('userToken',data.token);
     this.router.navigate(['/emp_table']);

     console.log(data)
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }

}
