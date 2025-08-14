import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  appName = signal('TestApp');
  router = inject(Router);
  stats = signal<Stat[]>([
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50+', label: 'Features' },
    { value: '24/7', label: 'Support' }
  ]);

  features = signal<Feature[]>([
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Lightning-fast load times and smooth user experience'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, responsive UI components that look great everywhere'
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Simple APIs and comprehensive documentation'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Optimized for mobile devices and touch interfaces'
    },
    {
      icon: '🛡️',
      title: 'Secure',
      description: 'Enterprise-grade security and data protection'
    },
    {
      icon: '🌍',
      title: 'Global Scale',
      description: 'Built to scale globally with CDN and edge computing'
    }
  ]);

  navigateToTimecard() {
    this.router.navigate(['/timecard']);
  }

  navigateToForm() {
    this.router.navigate(['/form']);
  }

  navigateToScheduling() {
    this.router.navigate(['/scheduling']);
  }
}
