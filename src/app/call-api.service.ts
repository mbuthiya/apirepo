import { Injectable } from '@angular/core';
import {Kinyozi} from './kinyozi';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  vinyozi:any;
  vinyoziarray:Kinyozi[];

 constructor(private http:HttpClient) {
  this.vinyoziarray=[];
 }

 quoteRequest(){

   interface ApiResponse{
     id:number;
     photo:string;
     name:string;
     style:number;
     location:number;
     cost:number
   }
   let promise =new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>('https://kinyozi.herokuapp.com/api/stylist/?format=json').toPromise().then(data=>{

         this.vinyozi=data
         console.log(this.vinyozi)
         this.vinyozi.forEach(m=>{
           this.vinyoziarray.push(new Kinyozi(m.id,m.photo,m.name,m.style,m.location,m.cost))
         })

           resolve()
       },
       error=>{
               this.vinyoziarray=[]
               reject(error)
           }
       )
   })

   return promise
 }
}
