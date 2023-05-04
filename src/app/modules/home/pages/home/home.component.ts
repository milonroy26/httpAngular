import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public name:any;
  public fnds:string[] = ['santo', 'krisno', 'amith', 'soikot'];
  public fndsName:any;
  public parseName:any;

  public users:{} = [
    { 
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    },
    
    { 
      "id": 2,
      "name": "Jeson",
      "username": "Holder",
      "email": "jeson@april.biz",
    }
  ]

  public userName:any;

  constructor() { }

  ngOnInit(): void {
    // set item
    localStorage.setItem('name', 'milon');
    localStorage.setItem('id', '293');
    // get item
    this.name = localStorage.getItem('name');
    // remove item
    localStorage.removeItem('id');
    // set json data
    localStorage.setItem('users', JSON.stringify(this.users));
    this.userName = localStorage.getItem('users');
    console.log(this.userName);
  }

  callFnds(){
    localStorage.setItem('frinds', JSON.stringify(this.fnds));
    this.fndsName = localStorage.getItem('frinds');
    this.parseName = JSON.parse(this.fndsName);
  }

}
