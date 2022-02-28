import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  
  // {path: 'emp_table', component: EmployeeTableComponent}
  { path: 'emp_table', component: EmployeeTableComponent,canActivate:[AuthGuard] },
  { path: 'login', component: SignInComponent },
  { path : '', redirectTo:'/login', pathMatch : 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
