import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent {

  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {
  }

  onUser() {
    this.service.getUser()
    .subscribe({
      next: (data) => {
        console.log(data);
      }
    })
    
  }

}
