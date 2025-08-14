import { Component } from '@angular/core';

@Component({
  selector: 'app-timecard',
  standalone: true,
  templateUrl: './timecard.html',
  styleUrl: './timecard.scss'
})
export class TimecardComponent {

  products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' }
  ];
 }
