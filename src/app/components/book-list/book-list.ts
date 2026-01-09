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
  private readonly booksService: BooksService = inject(BooksService);

  get booksList() {
    return this.booksService.getBooks();
  }

  get currentTitleFilter(): string {
    return this.booksService.titleFilter;
  }

  get currentAuthorFilter(): string {
    return this.booksService.authorFilter;
  }

  deleteBook(id: string) {
    this.booksService.deleteBook(id);
  }

  toggleFavorite(id: string) {
    this.booksService.toggleFavorite(id);
  }

  highlightMatch(text: string, filter: string): string {
    if (!filter) return text;
    return this.booksService.highlightMatch(text, filter);
  }
}
