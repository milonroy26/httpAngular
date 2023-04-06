import { Component } from '@angular/core';
import { User_interface } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent {

  public users:User_interface[] = [];
  readonly defaultImage = 'https://robohash.org/';

  private user:User_interface = {
    'id': 1,
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
    this.onUser();
    this.onCreateUser();
    // this.onUdateUser();
    // this.onDelateUser();
  }

  // get request
  onUser() {
    this.service.getUser()
    .subscribe({
      next: (data) => {
        this.users = data;
        console.table(this.users);
      }
    })
  }

  // post request
  onCreateUser(){
    this.service.createUser(this.user)
    .subscribe({
      next: (data) => {
        console.log('Post Request :', data);
      } 
    })
  }

  // put request
  onUdateUser(){
    this.service.updateUser(this.user)
    .subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

  // patc request
  onPatcUser():void {
    this.service.patcUser(this.user).subscribe(
      (response) => console.log(response),
      (error:any) => console.log(error),
      () => console.log("done patc user")
    );
  }

  // delate request
  onDelateUser():void{
    this.service.delateUser(3)
    .subscribe({
      next: (data) => {
        console.log('Delate request:', data);
      }
    })
  }

}
