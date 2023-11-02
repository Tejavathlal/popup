import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) {}


  getStudent():Observable<any>{
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students");
  }

  getstudentview(id:any):Observable<any>{
    return this.httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/" +id);
  }

  createstudent(data:any):Observable<any>{
    return this.httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data);
  }
  
  deletestudent(id:any):Observable<any>{
    return this.httpClient.delete("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id)
  }

  updatestudent(id:number, data:any):Observable<any>{
return this.httpClient.put("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/" +id,data);
  }

}
