import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Order {
  id: string;
  date: string;
  bookTitle: string;
  author: string;
  price: number;
  status: 'Delivered' | 'In Transit' | 'Processing';
  trackingUrl: string;
  reviewLeft: boolean;
  rating: number;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'January 2024'
  };

  orders: Order[] = [
    { id: 'ORD-9921', date: '2025-12-10', bookTitle: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15, status: 'Delivered', trackingUrl: '#', reviewLeft: false, rating: 0 },
    { id: 'ORD-8842', date: '2026-01-05', bookTitle: '1984', author: 'George Orwell', price: 12, status: 'In Transit', trackingUrl: '#', reviewLeft: false, rating: 0 }
  ];

  submitReview(order: Order) {
    if (order.rating > 0) {
      order.reviewLeft = true;
      console.log(`Review submitted for ${order.bookTitle}: ${order.rating} stars`);
    }
  }

  logout() {
    console.log('Logging out user...');
    // Add navigation logic to login page here
  }
}

