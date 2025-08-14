import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TimecardComponent } from './timecard/timecard';

const routes: Routes = [
  { path: '', component: TimecardComponent },
  { path: 'timecard', component: TimecardComponent }
];

@NgModule({
  declarations: [
    TimecardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TimecardComponent
  ]
})
export class TimecardsModule { }
