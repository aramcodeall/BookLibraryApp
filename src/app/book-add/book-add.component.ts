import { Component } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../book.service';
import { Router } from '@angular/router';

@Component({
    selector: 'book-add',
    templateUrl: './book-add.component.html',
    providers: [BooksService]
})
export class BookAddComponent {
    book: Book = new Book(0, "", "");

    constructor(private booksService: BooksService, private router: Router) {
    }
    addBook() {
        this.booksService.createBook(this.book).subscribe(data => {
            this.router.navigate(['/']);
        });
    }
}