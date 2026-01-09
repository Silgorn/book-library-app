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

  setFilter(title: string) {
    this.filterTitle = title.toLowerCase();
  }

  resetFilter() {
    this.filterTitle = '';
  }

  getBooks(): BookInfo[] {
    const list = [...this.books];
    if (!this.filterTitle) return list;

    return list.filter((book) => book.title.toLowerCase().includes(this.filterTitle));
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

  getFavoriteBooks(): BookInfo[] {
    return this.books.filter((book) => book.isFavorite);
  }

  private createBook(book: BookInput) {
    return { ...book, id: uuidv4(), isFavorite: false };
  }
}
