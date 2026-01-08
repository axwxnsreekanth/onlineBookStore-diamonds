import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class PaymentComponent {
  paymentForm: FormGroup;
  totalAmount: number = 27; // This would normally be passed from the Cart service

  constructor(private fb: FormBuilder, private router: Router) {
    this.paymentForm = this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  onPay() {
    if (this.paymentForm.valid) {
      console.log('Processing payment...');
      // Logic for payment gateway integration
      alert('Payment Successful! Your books are on the way.');
      this.router.navigate(['/dashboard']);
    }
  }
}

