import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-one',
  standalone: true,
  imports: [],
  templateUrl: './create-one.component.html',
  styleUrl: './create-one.component.css'
})
export class CreateOneComponent {

  constructor(private http: HttpClient) {}

  submitPersonForm(event: Event): void {
    event.preventDefault();
    const form = (event.target as HTMLFormElement);
    const formData = new FormData(form);
    const personData = {
      name: formData.get('name') as string,
      age: formData.get('age') as string,
      gender: formData.get('gender') as string,
      phone: formData.get('phone') as string,
    };
    
    this.http.post('https://public-db-api.onrender.com/api/person', personData, {observe: 'response' }).subscribe({
      next: (response) => {
        // console.log(response);
       
        alert('Entry uploaded successfully');
        form.reset();
      
      },
      error: (error) =>{
        switch (error.status) {
          case 400:
            alert("Error: That phone number is already in use");
            break;
          case 500:
            alert("Error: Could not upload entry to database");
            break;
          default:
            alert("Error: Something went wrong");
            break;
        }
      } 
    });
  }

}
