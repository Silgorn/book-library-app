import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from '../../books';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss',
})
export class BookForm {
  private readonly booksService: BooksService = inject(BooksService);

  readonly applyForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    author: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  handleSubmit(): void {
    if (this.applyForm.valid) {
      this.booksService.addBook(this.applyForm.getRawValue());
      this.applyForm.reset();
    }
  }

  handleAddRandomBook(): void {
    this.booksService.addRandomBook();
  }
}
