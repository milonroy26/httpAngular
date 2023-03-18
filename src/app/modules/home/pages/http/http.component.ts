import { Component } from '@angular/core';
import { User_interface } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent {

  private user:User_interface = {
    'id': 5,
    'name': 'jastin',
    'username': 'roy',
    'email': 'milon@gmail.com',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Rangpur',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }


  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {
    // this.onUdateUser();
    this.onUser();
    this.onDelateUser();
    // this.onCreateUser()
  }

  // get request
  onUser() {
    this.service.getUser()
    .subscribe({
      next: (data) => {
        console.table(data);
      }
    })
  }

  // post request
  onCreateUser():void{
    this.service.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log("done Create user")
    );
  }

  // put request
  onUdateUser():void{
    this.service.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log("done Update user")
    );
  }

  // patc request
  onPatcUser():void{
    this.service.patcUser(this.user).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log("done patc user")
    );
  }

  // delate request
  onDelateUser():void{
    this.service.delateUser(3).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log("done delate user")
    );
  }

}
