import { Component, inject } from '@angular/core';
import { BooksService } from '../../books';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  searchControl = new FormControl('');
  booksService: BooksService = inject(BooksService);

  handleTitleFilterChange() {
    this.booksService.setFilter(this.searchControl.value || '');
  }

  handleResetFilters(): void {
    this.booksService.resetFilter();
    this.searchControl.reset('');
  }
}
