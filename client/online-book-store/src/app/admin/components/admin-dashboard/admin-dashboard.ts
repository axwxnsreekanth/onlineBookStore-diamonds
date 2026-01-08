import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent {
  sidebarOpen = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  navigateTo(page: string) {
    this.router.navigate([`/admin/${page}`]);
  }

  logout() {
    alert('Logging out...'); // Replace with real logout later
    this.router.navigate(['/login']);
  }
}
