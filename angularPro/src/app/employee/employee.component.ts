import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  newArray=[];
  slctdDep;
  txtBox;
  srtVal;
  searchArr=[]
   employees = [{
    name: "Apex",
    age: 70,
    email: "apex@gmail.com",
    departments: ["Computer", "Physics"],
  },
  {
    name: "Brilliant",
    age: 70,
    email: "brilliant@gmail.com",
    departments: ["Computer", "Physics"],
  },
    {
      name: "Employee One",
      age: 40,
      email: "one@gmail.com",
      departments: ["Computer", "Physics"],
    },
    {
      name: "Employee Two",
      age: 10,
      email: "Two@gmail.com",
      departments: ["Computer"],
    },
    {
      name: "Employee Three",
      age: 10,
      email: "Three@gmail.com",
      departments: ["Physics", "Chemistry"],
    },
    {
      name: "Employee Four",
      age: 60,
      email: "Four@gmail.com",
      departments: ["Chemistry", "Physics"],
    },
    {
      name: "Employee Five",
      age: 70,
      email: "Five@gmail.com",
      departments: ["Computer", "Physics", "Chemistry"],
    },
    {
      name: "Employee Six",
      age: 70,
      email: "Six@gmail.com",
      departments: ["Computer", "Physics"],
    }
  ];
  
  constructor() { }

  ngOnInit() {
    this.employees
    var pushedDep=[]
    //
    //////Department Dropdown//////

    for (var i=0;i<this.employees.length;i++){
      var depArray=this.employees[i].departments
      for(var j=0;j<depArray.length;j++){
        pushedDep.push(depArray[j])
      }
      
    }
    console.log(pushedDep);
    
//unique Departments 

pushedDep.forEach(element=>{
  if(!this.newArray.includes(element)){
    this.newArray.push(element)
  }
})
console.log(this.newArray);

///////////////////////////////////
this.srtVal="az"
this.onSort()
  }

  slct(){

    console.log(this.slctdDep);

  }
  
  onSearch(){
     
  for (var k=0; k<this.employees.length; k++ ){

        var chkEmp=this.employees[k].departments

        for (var l=0 ; l<chkEmp.length ; l++){
        

          if(chkEmp[l]===this.slctdDep && this.employees[k].name===this.txtBox){
            
          
            
            this.searchArr.push(this.employees[k])
            break;

          }else if(chkEmp[l]===this.slctdDep && this.employees[k].email===this.txtBox){
           
            this.searchArr.push(this.employees[k])
            break;
           }
          //  else if(chkEmp[l]===this.slctdDep && this.employees[k].email===undefined && this.employees[k].name===undefined){
          //   console.log("from here");
            
          //   this.searchArr.push(this.employees[k])
          //   break;
          // }
///////////////////////dropdownvalue this.employees[k].email===this.txtBox
        }
       
  }

  this.employees =this.searchArr  
  }
  
  onReset(){
    window.location.reload();
    
  }

onSort(){
  ////////////////////////////name ao////////////////////////
if(this.srtVal==="az"){
  this.employees.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
}
////////////////////////////name do////////////////////////
if(this.srtVal==="za"){
  this.employees.sort(function(a, b){
    if(a.name < b.name) { return 1; }
    if(a.name > b.name) { return -1; }
    return 0;
})
}
///////////////////////////age assending/////////////////////////
if(this.srtVal==="aga"){
  this.employees.sort((a, b) =>  (a.age) -(b.age) )

  console.log(this.employees);
}


  ///////////////////////age decending///////////////////////
if(this.srtVal==="agd"){
  this.employees.sort((a, b) =>  (b.age)-(a.age) )

  console.log(this.employees);

}

////////////////////////////email ao////////////////////////
if(this.srtVal==="eaz"){
  this.employees.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
}


}





}
