import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BooksService } from '../../books';

@Component({
  selector: 'app-book-list',
  imports: [MatIconModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {
  booksService: BooksService = inject(BooksService);

  get booksList() {
    return this.booksService.getBooks();
  }

  deleteBook(id: string) {
    this.booksService.deleteBook(id);
  }

  toggleFavorite(id: string) {
    this.booksService.toggleFavorite(id);
  }
}
