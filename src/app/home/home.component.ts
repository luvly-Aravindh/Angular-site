import { Component, OnInit } from '@angular/core';
interface angular {
  value: string;
  viewValue: string;
}
interface react {
  value: string;
  viewValue: string;
}
interface Vue {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  angular: angular[] = [
    {value: 'Module-0', viewValue: 'Module'},
    {value: 'Component-1', viewValue: 'component'},
    {value: 'framwork-2', viewValue: 'Framwork'},
  ];
  react: react[] = [
    {value: 'Module-0', viewValue: 'Module'},
    {value: 'Component-1', viewValue: 'component'},
    {value: 'framwork-2', viewValue: 'Framwork'},
  ];
  Vue: Vue[] = [
    {value: 'Module-0', viewValue: 'Module'},
    {value: 'Component-1', viewValue: 'component'},
    {value: 'framwork-2', viewValue: 'Framwork'},
  ];
}
