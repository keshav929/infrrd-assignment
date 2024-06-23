import { Component, OnInit } from '@angular/core';
import { Employee, localStorageIdentifierLabel } from '../../Config/constants';
import { LocalStorageService } from '../../Services/localstorage.service';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all-employees',
  standalone: true,
  imports: [NgIf, EmployeeDetailsComponent, NgForOf, RouterModule],
  templateUrl: './view-all-employees.component.html',
  styleUrl: './view-all-employees.component.css'
})
export class ViewAllEmployeesComponent implements OnInit{
  showLoader : boolean = true;
  employeeList: Employee[] = [];

  constructor(private localStorageService: LocalStorageService, private router: Router) {

  }

  ngOnInit() {
    this.employeeList = this.localStorageService.get(localStorageIdentifierLabel);
    console.log(this.employeeList);
    this.showLoader = false;
  }

  routeToViewEmployeeDetails(id: string | undefined): void {
    this.router.navigate([`/view-employee/${id}`]);
  }

}
