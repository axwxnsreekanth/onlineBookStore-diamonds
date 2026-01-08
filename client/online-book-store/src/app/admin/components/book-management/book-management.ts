import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-management.html',
  styleUrls: ['./book-management.css']
})
export class BookManagementComponent {

  searchText = '';
  selectedCategory = '';
  sortOrder = '';

  showModal = false;
  isEditMode = false;

  bookForm: any = this.emptyBook();

  books = [
    {
      id: 2,
      title: "The Hitchhiker’s Guide to the Galaxy",
      author: "Douglas Adams",
      price: 399,
      stockQuantity: 5,
      description: "A hilarious sci-fi comedy across space.",
      imageUrl: "https://example.com/hitchhikers.jpg",
      category: { id: 2, name: "Comedy" }
    },
    {
      id: 3,
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      price: 499,
      stockQuantity: 73,
      description: "A gripping mystery involving corruption and murder.",
      imageUrl: "https://m.media-amazon.com/images/I/8133MFwkxOL._AC_UF1000,1000_QL80_.jpg",
      category: { id: 3, name: "Crime & Mystery" }
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      price: 299,
      stockQuantity: 2,
      description: "A chilling vision of a totalitarian future.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeHESWVnEtmLqZvS0N_mp0-JdewtCZ4wD8g&s",
      category: { id: 4, name: "Dystopian" }
    },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      price: 499,
      stockQuantity: 1,
      description: "A young boy discovers he is a wizard.",
      imageUrl: "https://m.media-amazon.com/images/I/81q77Q39nEL.jpg",
      category: { id: 5, name: "Fantasy" }
    },
    {
      id: 6,
      title: "The Book Thief",
      author: "Markus Zusak",
      price: 399,
      stockQuantity: 21,
      description: "A story of a girl growing up in Nazi Germany.",
      imageUrl: "https://m.media-amazon.com/images/I/71H2SJik5AL._AC_UF1000,1000_QL80_.jpg",
      category: { id: 6, name: "Historical Fiction" }
    },
    {
      id: 7,
      title: "It",
      author: "Stephen King",
      price: 550,
      stockQuantity: 6,
      description: "A terrifying entity haunting a small town.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg",
      category: { id: 7, name: "Horror" }
    }
  ];

  get categories() {
    return [...new Set(this.books.map(b => b.category.name))];
  }

  filteredBooks() {
    let list = this.books.filter(b =>
      b.title.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.selectedCategory ? b.category.name === this.selectedCategory : true)
    );

    if (this.sortOrder === 'low') list.sort((a, b) => a.price - b.price);
    if (this.sortOrder === 'high') list.sort((a, b) => b.price - a.price);

    return list;
  }

  openAdd() {
    this.bookForm = this.emptyBook();
    this.isEditMode = false;
    this.showModal = true;
  }

  openEdit(book: any) {
    this.bookForm = JSON.parse(JSON.stringify(book));
    this.isEditMode = true;
    this.showModal = true;
  }

  saveBook() {
    if (this.isEditMode) {
      const index = this.books.findIndex(b => b.id === this.bookForm.id);
      this.books[index] = this.bookForm;
    } else {
      this.bookForm.id = Date.now();
      this.books.push(this.bookForm);
    }
    this.closeModal();
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }

  closeModal() {
    this.showModal = false;
  }

  emptyBook() {
    return {
      id: null,
      title: '',
      author: '',
      price: 0,
      stockQuantity: 0,
      description: '',
      imageUrl: '',
      category: { id: null, name: '' }
    };
  }
}
