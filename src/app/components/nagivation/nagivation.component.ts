import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nagivation',
  templateUrl: './nagivation.component.html',
  styleUrls: ['./nagivation.component.scss']
})
export class NagivationComponent implements OnInit {

  name = localStorage.getItem('token');

  constructor(private router: Router) { }

  public isMenuCollapsed = true;

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    console.log(this.name);
  }

}
