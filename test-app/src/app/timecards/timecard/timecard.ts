import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timecard',
  templateUrl: './timecard.html',
  styleUrl: './timecard.scss'
})
export class TimecardComponent implements OnInit {

  products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' }
  ];

  form = new FormGroup({
    name: new FormControl("Sam", Validators.required),
    price: new FormControl(),
    description: new FormControl(),
    country: new FormControl("US")
  })

  addProduct() {
    console.log(this.form);
  }

  ngOnInit() {
    this.form.controls.country.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

}
