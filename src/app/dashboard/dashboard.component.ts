import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';


interface IRow{
  LeaveType:string;
  Used:string;
  Balance:string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heading = 'Employee_Portal';
  Logo = './assets/Logo.png';
  OfficeLogo='./assets/office background.png';

  constructor() {
  
}

  
  ngOnInit(): void {
  }

  themeClass = "ag-theme-quartz";

  rowData: IRow[] =[
    {
      LeaveType:'FlexiLeave(FL)',
      Used:'4',
      Balance:'4',
    },
    {
      LeaveType:'CasualLeave(CL)',
      Used:'4',
      Balance:'4',
    },
    {
      LeaveType:'SickLeave(SL)',
      Used:'4',
      Balance:'4',
    },
    {
      LeaveType:'PrivilegedLeave(PL)',
      Used:'4',
      Balance:'4',
    },
  ];

  colDefs: ColDef<IRow>[] = [
    { headerName: 'LeaveType', field: 'LeaveType'},
    { headerName: 'Used',field: 'Used'},
    { headerName: 'Balance',field: 'Balance'},
  ];

}
