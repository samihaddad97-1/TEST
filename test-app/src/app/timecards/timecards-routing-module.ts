import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimecardComponent } from './timecard/timecard';

const routes: Routes = [
  { path: '', component: TimecardComponent },
  { path: 'timecard', component: TimecardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimecardsRoutingModule { }
