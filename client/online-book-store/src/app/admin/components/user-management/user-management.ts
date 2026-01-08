import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.css']
})
export class UserManagementComponent {
  searchText = '';

  users = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', role: 'User' },
    { id: 3, name: 'Admin One', email: 'admin@store.com', role: 'Admin' }
  ];

  selectedUser: any = null;

  filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  editUser(user: any) {
    this.selectedUser = { ...user };
  }

  saveUser() {
    const index = this.users.findIndex(u => u.id === this.selectedUser.id);
    if (index !== -1) {
      this.users[index] = this.selectedUser;
    }
    this.selectedUser = null;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
