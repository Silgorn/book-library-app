import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { BookInfo } from './bookinfo';
import booksData from '../app/data/books.json';

type BookInput = { title: string; author: string };

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: BookInfo[] = [];
  private filterTitle: string = '';
  private filterAuthor: string = '';
  private onlyFavorites: boolean = false;

  setTitleFilter(title: string) {
    this.filterTitle = title.toLowerCase();
  }

  setAuthorFilter(author: string) {
    this.filterAuthor = author.toLowerCase();
  }

  setOnlyFavoritesFilter(value: boolean) {
    this.onlyFavorites = value;
  }

  resetFilter() {
    this.filterTitle = '';
    this.filterAuthor = '';
    this.onlyFavorites = false;
  }

  getBooks(): BookInfo[] {
    return this.books.filter((book) => {
      const matchesTitle = book.title.toLowerCase().includes(this.filterTitle);

      const matchesAuthor = book.author.toLowerCase().includes(this.filterAuthor);

      const matchesFavorites = this.onlyFavorites ? book.isFavorite : true;

      return matchesTitle && matchesAuthor && matchesFavorites;
    });
  }

  addBook(book: BookInput) {
    this.books = [...this.books, this.createBook(book)];
  }

  addRandomBook() {
    const random = booksData[Math.floor(Math.random() * booksData.length)];
    this.addBook(random);
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  toggleFavorite(id: string) {
    this.books = this.books.map((book) =>
      book.id === id ? { ...book, isFavorite: !book.isFavorite } : book
    );
  }

  highlightMatch(text: string, filter: string): string {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  get titleFilter(): string {
    return this.filterTitle;
  }

  get authorFilter(): string {
    return this.filterAuthor;
  }

  private createBook(book: BookInput) {
    return { ...book, id: uuidv4(), isFavorite: false };
  }
}
