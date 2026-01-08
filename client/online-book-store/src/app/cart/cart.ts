import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface CartItem {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {
  addressForm: FormGroup;
  
  cartItems: CartItem[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15, image: 'https://via.placeholder.com/150', quantity: 1 },
    { id: 2, title: '1984', author: 'George Orwell', price: 12, image: 'https://via.placeholder.com/150', quantity: 2 }
  ];

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      fullName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5,6}$')]]
    });
  }

  get totalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  proceedToPayment() {
    if (this.addressForm.valid && this.cartItems.length > 0) {
      console.log('Proceeding to payment for:', this.addressForm.value);
      // Navigate to payment gateway logic
    }
  }
}
