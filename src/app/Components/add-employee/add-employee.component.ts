import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DesignationConfigValues, Employee, contactNumberPattern, emailValidationPattern, localStorageIdentifierLabel } from '../../Config/constants';
import { LocalStorageService } from '../../Services/localstorage.service';
import { AvatarConfigValues } from '../../app.config';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, ButtonComponent, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  addEmployee: FormGroup;
  title: string = 'Add';
  employeeId: string | null = '';
  showLoader: boolean = true;
  idExists: boolean = false;
  avatarConfigMap = AvatarConfigValues;
  designationConfigValues=DesignationConfigValues;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private service: LocalStorageService) {
    this.addEmployee = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      avatar: ['',[Validators.required]],
      companyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern(emailValidationPattern)]],
      contactNumber: ['', [Validators.required, Validators.pattern(contactNumberPattern)]],
      designation: ['', Validators.required]
    }); 

    
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.title = this.employeeId ? 'Edit' : 'Add';


    this.route.params.subscribe((param)=>{
      if(param['id']) {
        this.title = 'Edit';
        this.employeeId = param['id'];
        this.getEmployeeData(param['id']);
      }
      else {
        this.title = 'Add';
        this.employeeId = '';
        this.showLoader = false;
        this.idExists = true;
      }
    });

  }

  getEmployeeData(id: string) {
    let employeeData = this.service.get(localStorageIdentifierLabel);
    let index = employeeData.findIndex((employee: Employee)=> employee.id == id);
    if(index>-1) {
      let employeeDataForCurrentId = employeeData[index];
      this.showLoader = false;
      this.idExists = true;
      this.addEmployee.patchValue(employeeDataForCurrentId);
    }
    else {
      this.showLoader = false;  
      this.idExists = false;    
    }
    
  }

  handleCancelClick(event: unknown) {
    this.router.navigate(['/view-all-employees']);
  }

  handleSubmitClick(event: unknown) {
    console.log(event);
    let employeeData = this.addEmployee.value;
    console.log(employeeData);
    if(this.title.toLocaleLowerCase() == 'add') {
      this.service.set(localStorageIdentifierLabel, employeeData);
    }
    else {
      this.service.update(localStorageIdentifierLabel, employeeData, this.employeeId);
    }

    this.router.navigate(['/view-all-employees']);
  }
}
