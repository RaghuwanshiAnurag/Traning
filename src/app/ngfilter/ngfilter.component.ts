import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfilter',
  templateUrl: './ngfilter.component.html',
  styleUrls: ['./ngfilter.component.css']
})
export class NgfilterComponent implements OnInit {
  searchText:string='';
  table = [
    {Empid: 1, Name:"Anurag", Place:"Ratlam" },
    {Empid: 2, Name:"Aditya", Place:"Sangli" },
    {Empid: 3, Name:"Aniket", Place:"Delhi" },
    {Empid: 4, Name:"Abhinav", Place:"Kolapur" },
    {Empid: 5, Name:"Rambhu", Place:"Pune" },
    {Empid: 6, Name:"Rushi", Place:"Aurangabad" },
    {Empid: 7, Name:"sachin", Place:"Karnatak" },
    {Empid: 8, Name:"Satyaji", Place:"Assam" },
    {Empid: 9, Name:"Sourabh", Place:"Solapur" },
    {Empid: 10, Name:"Shivam", Place:"kanpur" },
    {Empid: 11, Name:"Vishnu", Place:"Kerala" }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.table)
  }

}
