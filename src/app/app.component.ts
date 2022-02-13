import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from './book.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [BooksService]
})
export class AppComponent implements OnInit {
    books: Array<Book>;

    constructor(private booksService: BooksService) {
        this.books = new Array<Book>();
    }

    ngOnInit() {
        this.loadBooks();
    }

    private loadBooks() {
        this.booksService.getBooks().subscribe((data: Array<Book>) => {
            this.books = data;
        });
    }

    createBook() {
        this.booksService.createBook(new Book(1, "", "")).subscribe(data => {
            this.loadBooks();
        });
    }

    deleteBook(book: Book) {
        this.booksService.deleteBook(book.id + "").subscribe(data => {
            this.loadBooks();
        });
    }
}