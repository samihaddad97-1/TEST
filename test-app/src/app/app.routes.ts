import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { TimecardComponent } from './timecard/timecard';
import { FormComponent } from './form/form';
import { SchedulingComponent } from './scheduling/scheduling';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'timecard', component: TimecardComponent },
  { path: 'form', component: FormComponent },
  { path: 'scheduling', component: SchedulingComponent },
  { path: '**', redirectTo: '' }
];
