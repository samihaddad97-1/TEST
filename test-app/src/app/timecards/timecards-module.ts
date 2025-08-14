import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TimecardsRoutingModule } from './timecards-routing-module';
import { TimecardComponent } from './timecard/timecard';


@NgModule({
  declarations: [
    TimecardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TimecardsRoutingModule
  ]
})
export class TimecardsModule { }
