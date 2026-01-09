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
  private readonly booksService: BooksService = inject(BooksService);

  readonly titleFilterControl = new FormControl('', { nonNullable: true });
  readonly authorFilterControl = new FormControl('', { nonNullable: true });

  handleTitleFilterChange(): void {
    this.booksService.setTitleFilter(this.titleFilterControl.value || '');
  }

  handleAuthorFilterChange(): void {
    this.booksService.setAuthorFilter(this.authorFilterControl.value || '');
  }

  handleResetFilters(): void {
    this.booksService.resetFilter();
    this.titleFilterControl.reset('');
    this.authorFilterControl.reset('');
  }
}
