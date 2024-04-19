import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-one',
  standalone: true,
  imports: [],
  templateUrl: './delete-one.component.html',
  styleUrl: './delete-one.component.css'
})
export class DeleteOneComponent {

  constructor(private http: HttpClient) { }

  deletePersonById(event: Event) {
    const form = (event.target as HTMLFormElement);
    var personId = (document.getElementById('personId') as HTMLInputElement).value;
    if (personId) {
      this.http.delete(`http://localhost:5005/api/person/${personId}`)
        .subscribe({
          next: (response: any) => {
            // console.log('Person deleted successfully:', response);
            alert("Entry deleted successfully"); 
            form.reset();
          },
          error: (error: any) => {
            switch (error.status) {
              case 404:
                alert("Error: No person with that ID was found")
                break;
              case 500:
                alert("Error: Could not delete that entry in database");
                break;
              default:
                alert("Error: Something went wrong");
                break;
            }
           
          }
        });
    } else {
      alert('ID is required'); 
    }
  }

}
