import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-management.html',
  styleUrls: ['./order-management.css']
})
export class OrderManagementComponent {

  orders = [
    {
      id: 'ORD-1001',
      date: '2025-01-02',
      user: { id: 21, name: 'John Doe' },
      total: 798,
      status: 'Placed',
      items: [
        { title: '1984', qty: 1 },
        { title: 'The Book Thief', qty: 1 }
      ]
    },
    {
      id: 'ORD-1002',
      date: '2025-01-03',
      user: { id: 22, name: 'Jane Smith' },
      total: 499,
      status: 'Shipped',
      items: [
        { title: 'Harry Potter', qty: 1 }
      ]
    },
    {
      id: 'ORD-1003',
      date: '2025-01-04',
      user: { id: 23, name: 'Mike Ross' },
      total: 1099,
      status: 'Delivered',
      items: [
        { title: 'Dune', qty: 1 },
        { title: 'It', qty: 1 }
      ]
    },
    {
      id: 'ORD-1004',
      date: '2025-01-05',
      user: { id: 24, name: 'Rachel Green' },
      total: 350,
      status: 'Placed',
      items: [
        { title: 'The Notebook', qty: 1 }
      ]
    },
    {
      id: 'ORD-1005',
      date: '2025-01-06',
      user: { id: 25, name: 'Harvey Specter' },
      total: 550,
      status: 'Cancelled',
      items: [
        { title: 'It', qty: 1 }
      ]
    },
    {
      id: 'ORD-1006',
      date: '2025-01-06',
      user: { id: 26, name: 'Louis Litt' },
      total: 399,
      status: 'Placed',
      items: [
        { title: 'To Kill a Mockingbird', qty: 1 }
      ]
    },
    {
      id: 'ORD-1007',
      date: '2025-01-07',
      user: { id: 27, name: 'Monica Geller' },
      total: 899,
      status: 'Shipped',
      items: [
        { title: '1984', qty: 1 },
        { title: 'The Hitchhiker’s Guide', qty: 1 }
      ]
    },
    {
      id: 'ORD-1008',
      date: '2025-01-07',
      user: { id: 28, name: 'Chandler Bing' },
      total: 450,
      status: 'Placed',
      items: [
        { title: 'The Hunger Games', qty: 1 }
      ]
    },
    {
      id: 'ORD-1009',
      date: '2025-01-08',
      user: { id: 29, name: 'Ross Geller' },
      total: 399,
      status: 'Delivered',
      items: [
        { title: 'The Three Musketeers', qty: 1 }
      ]
    },
    {
      id: 'ORD-1010',
      date: '2025-01-08',
      user: { id: 30, name: 'Phoebe Buffay' },
      total: 599,
      status: 'Placed',
      items: [
        { title: 'Dune', qty: 1 }
      ]
    }
  ];

  statuses = ['Placed', 'Shipped', 'Delivered', 'Cancelled'];

  updateStatus(order: any, status: string) {
    order.status = status;
  }

  deleteOrder(id: string) {
    this.orders = this.orders.filter(o => o.id !== id);
  }

  statusStep(order: any, step: string) {
    const orderIndex = this.statuses.indexOf(order.status);
    const stepIndex = this.statuses.indexOf(step);
    return stepIndex <= orderIndex && order.status !== 'Cancelled';
  }
}
