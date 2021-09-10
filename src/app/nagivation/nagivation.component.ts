import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nagivation',
  templateUrl: './nagivation.component.html',
  styleUrls: ['./nagivation.component.scss']
})
export class NagivationComponent implements OnInit {

  constructor() { }

  public isMenuCollapsed = true;

  ngOnInit(): void {
  }

}
