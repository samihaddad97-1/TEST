import { Component } from '@angular/core';

@Component({
  selector: 'app-scheduling',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Scheduling</h1>
      <p>Manage schedules and appointments efficiently.</p>
      <button onclick="history.back()">← Back to Dashboard</button>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    button {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
    button:hover {
      background: #0056b3;
    }
  `]
})
export class SchedulingComponent { }
