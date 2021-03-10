import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * This is a util service to store the temporary data returned from the backend
 */
export class ShareDataService {

  data:any={};

  constructor() { }

  setData(key: any,value: any) {
    this.data[key]=value;
 }

 clearData() {
    this.data={};
 }

 getData(key: any) {
   return this.data[key];
 }
}
