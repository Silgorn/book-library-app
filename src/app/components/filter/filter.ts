import { Component, inject } from '@angular/core';
import { BooksService } from '../../books';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  booksService: BooksService = inject(BooksService);

  handleTitleFilterChange(value: string): void {
    this.booksService.setFilter(value);
  }
}
