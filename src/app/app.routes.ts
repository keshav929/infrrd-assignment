import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { ViewAllEmployeesComponent } from './Components/view-all-employees/view-all-employees.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';

export const routes: Routes = [
    { 
        path: '',
        component: DashboardComponent
    },
    {
        path: 'add-employee',
        component: AddEmployeeComponent
    },
    {
        path: 'edit-employee/:id',
        component: AddEmployeeComponent
    }, 
    {
        path: 'view-employee/:id',
        component: ViewEmployeeComponent
    },   
    {
        path: 'view-all-employees',
        component: ViewAllEmployeesComponent
    },
];
