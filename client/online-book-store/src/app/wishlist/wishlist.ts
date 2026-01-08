import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.css'] 
})
export class WishlistComponent {
  // Mock data for display
  wishlistBooks: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15, image: 'https://via.placeholder.com/150' },
    { id: 3, title: '1984', author: 'George Orwell', price: 12, image: 'https://via.placeholder.com/150' }
  ];

  removeFromWishlist(bookId: number) {
    this.wishlistBooks = this.wishlistBooks.filter(b => b.id !== bookId);
  }

  addToCart(book: Book) {
    console.log('Added to cart:', book.title);
    // Logic to update cart count
  }
}
