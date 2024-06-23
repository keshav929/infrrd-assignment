import { Component, Input } from '@angular/core';
import { DesignationConfigValues, Employee } from '../../Config/constants';
import { AvatarConfigValues } from '../../app.config';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  AvatarConfigMap = AvatarConfigValues;
  designationConfigValue =DesignationConfigValues;

  @Input() employee: Employee = {
    id:'',
    name: '',
    email: '',
    companyName: '',
    avatar: '',
    contactNumber: '',
    designation: ''
  };

  constructor() {

  }

  getEmployeeAvatar() {
    let avatar = this.AvatarConfigMap.find((avatar)=> avatar.id == this.employee.avatar);
    return avatar ? avatar['value']: '';
  }
  getDesignationValue() {
    if(this.employee['designation']){
     let designation = DesignationConfigValues.find((designation)=> designation['id'] == this.employee['designation']);
      
      return designation ? designation['value']: '';
    }
    else {
      return null;
    }
}

 

}
