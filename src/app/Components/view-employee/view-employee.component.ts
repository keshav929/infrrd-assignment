import { Component } from '@angular/core';
import { AvatarConfigValues } from '../../app.config';
import { DesignationConfigValues, Employee, localStorageIdentifierLabel } from '../../Config/constants';
import { LocalStorageService } from '../../Services/localstorage.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [ButtonComponent, ConfirmationModalComponent, NgIf],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {
  AvatarConfigMap = AvatarConfigValues;
  employee: Employee = {
    name:'',
    designation:'',
    email:'',
    companyName:'',
    contactNumber:'',
    avatar:''
    };

  employeeId:string ='';
  showModal: boolean = false;
  
  constructor(private localStorageService: LocalStorageService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      if(param['id']) {
        this.employeeId = param['id'];
        let employeeList = this.localStorageService.get(localStorageIdentifierLabel);
        this.employee = employeeList.find((employee: Employee)=> employee.id == this.employeeId);
      }
    });
  }
  
  getEmployeeAvatar() {
    let avatar = this.AvatarConfigMap.find((avatar)=> avatar.id == this.employee?.avatar);
    return avatar ? avatar['value']: '';
  }

  getDesignationValue() {
    if(this.employee['designation']){
     let designation = DesignationConfigValues.find((designation) => designation['id'] == this.employee['designation']);
      
      return designation ? designation['value']: '';
    }
    else {
      return null;
    }
  }

  handleEdit(event: any) {
    this.router.navigate(['/edit-employee/'+ this.employeeId]);
  }

  handleDelete(event: any) {
    this.showModal = true;
  }

  handleYes(data: any) {
    // delete data
    let employeeList = this.localStorageService.get(localStorageIdentifierLabel);
   let index =  employeeList.findIndex((emp:Employee)=> emp.id == this.employeeId);
   if(index > -1) {
    employeeList.splice(index, 1);
    this.localStorageService.reset(localStorageIdentifierLabel, employeeList);
    this.showModal = false;
   }
   this.router.navigateByUrl('/');
  }

  handleNo(data:any) {
    this.showModal = false;
  }
}
