import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-one',
  standalone: true,
  imports: [],
  templateUrl: './update-one.component.html',
  styleUrl: './update-one.component.css'
})
export class UpdateOneComponent {

  constructor(private http: HttpClient) {}

  updatePersonForm(event: Event): void {
    event.preventDefault();
    const form = (event.target as HTMLFormElement);
    const formData = new FormData(form);

    const personId = formData.get('id') as string;
    const personData = {
      name: formData.get('name') as string,
      age: formData.get('age') as string,
      sex: formData.get('sex') as string,  
      phone: formData.get('phone') as string
    };

    this.http.put(`http://localhost:5005/api/person/${personId}`, personData, {observe: 'response' }).subscribe({
      next: (response) => {
      
        alert('Entry updated successfully');
        form.reset();  
        
      },
      error: (error) => {
        switch (error.status) {
          case 404:
            alert("Error: No person with that ID was found")
            break;
          case 400:
            alert("Error: That phone number is already in use");
            break;
          case 500:
            alert("Error: Could not update entry in database");
            break;
          default:
            alert("Error: Something went wrong");
            break;
        }
      }
    });
  }

}
