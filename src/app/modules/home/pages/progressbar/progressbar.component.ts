import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {
  public fnds:any;  
  constructor(
    private service: StudentsService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

   // get request
   getUser() {
    this.service.get()
    .subscribe({
      next: (data) => {
        this.fnds = data;
        console.log(data);
      }
    })
  }

}
