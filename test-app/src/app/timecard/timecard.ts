import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timecard',
  standalone: true,
  imports: [CommonModule],
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
