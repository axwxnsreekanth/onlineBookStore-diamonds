import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  genre: string;
  image: string;
}

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css']
})
export class DashboardComponent {
  searchQuery: string = '';
  selectedGenre: string = 'All';
  
  genres: string[] = ['All', 'Fiction', 'Science', 'History', 'Fantasy', 'Biography'];

  books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15, genre: 'Fiction', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'A Brief History of Time', author: 'Stephen Hawking', price: 25, genre: 'Science', image: 'https://via.placeholder.com/150' },
    // Add more mock data as needed
  ];

  get filteredBooks() {
    return this.books.filter(book => 
      (this.selectedGenre === 'All' || book.genre === 'selectedGenre') &&
      (book.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }

  logout() {
    console.log('Logging out...');
  }
}

