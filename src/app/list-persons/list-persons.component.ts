import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';

export interface PersonElement {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
 
}

@Component({
  selector: 'app-list-persons',
  imports: [CommonModule,MatTableModule],
  templateUrl: './list-persons.component.html',
  styleUrl: './list-persons.component.css'
})
export class ListPersonsComponent implements OnInit{
  private http = inject(HttpClient);
  persons: PersonElement[] = [];
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.http.get<any[]>('https://fakerapi.it/api/v2/persons?_quantity=10&_gender=female&_birthday_start=2005-01-01')
      .subscribe({
        next:(data:any) => {this.persons = data.data;this.loading = false;},
        error: (err) => { console.error('Error al cargar usuarios', err);this.loading = false;}
      });
  }

}
