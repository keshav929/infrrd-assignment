import { Injectable } from '@angular/core';
import { Employee } from '../Config/constants';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(label: string) {
    let value = localStorage.getItem(label);

    if(value)
      return JSON.parse(value);
    else 
      return [];
  }

  reset(label:string, value: any) {
    localStorage.setItem(label, JSON.stringify(value));
  }

  set(label: string, value: any) {
    let existingData = this.get(label);
    if(existingData) {
      let id =  existingData.length > 0 ? +existingData[existingData.length-1]['id'] : 0;
      value['id'] = id + 1;
    }
    else {
      value['id'] = 0;
    }

    existingData.push(value);
    
    let stringValue = JSON.stringify(existingData);
    localStorage.setItem(label, stringValue);
  }

  update(label: string, value: any, id: string | null) {
    let existingData = this.get(label);
    let index = existingData.findIndex((item: any) => item['id']==id);
    if(index > -1) {
      existingData.splice(index, 1);
      value['id'] = id;
      existingData.splice(index, 0, value);
      localStorage.setItem(label, JSON.stringify(existingData));
    }

  }
}
