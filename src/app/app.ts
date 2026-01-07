import { Component, signal } from '@angular/core';
import { BookForm } from './components/book-form/book-form';
import { Filter } from './components/filter/filter';
import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [BookForm, Filter, BookList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('book-library-app');
}
