import { Component, OnInit, ViewChild } from '@angular/core';
import {EmpTableServiceService} from './shared/emp-table-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  displayedColumns: string[] = ['p_ID', 'p_Name', 'p_Price', 'p_Quantity'];
  dataSource!:MatTableDataSource<any>;

  // dataSource = new MatTableDataSource<any>(); //------------ ye lagana zaroori hota hai datasource walay error k liye
  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  constructor (private UserData:EmpTableServiceService,private router : Router){}
    
  ngOnInit(){
    this.UserData.getProducts().subscribe((response : any)=>{ //idr response:any karna hai
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      console.log("Response is:",response);
      this.dataSource.sort = this.matSort; 
      // this.dataSource = response;
      // 
       
    })
  }
  filterData($event : any){
    this.dataSource.filter = $event.target.value;

   }


logout(){
  localStorage.removeItem('userToken');
  this.router.navigate(['/login']);
}

}
