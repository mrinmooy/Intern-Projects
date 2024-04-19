import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewALLComponent implements OnInit {
  public persons: any = [];  
  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPersons();
  }

  fetchPersons(): void {
    this.http.get('https://public-db-api.onrender.com/api/person').subscribe(
      (response) => {
        this.persons = response;
        // console.log(this.persons); 
        this.loading = false;
      },
      (error) => {
        // console.error('Error fetching persons:', error);
        alert("Error: Something went wrong")
        this.loading = false;
      }
    );
  }
}