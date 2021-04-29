import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CooksService {

  constructor(private http : HttpClient) { }

  //function to send request to api to get the data
  getCooks(body : any)
{
  return this.http.post<any>('https://api.dev.chefed.co/chefed/api/v1/cook/filter', body);
}
} 
 
