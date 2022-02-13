import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../book.service';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    providers: [BooksService]
})
export class BookListComponent implements OnInit {
    books: Array<Book>;
    searchString: string = "";
    orderAsc: boolean = true;
    lastOrdered: string = "";

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

    deleteBook(book: Book) {
        this.booksService.deleteBook(book.id + "").subscribe(data => {
            this.loadBooks();
        });
    }

    applySearch() {
        this.booksService.getBooks().subscribe((data: Array<Book>) => {
            this.books = data.filter(
                book => book.name.toLowerCase().includes(this.searchString.toLowerCase())
                    || book.author.toLowerCase().includes(this.searchString.toLowerCase()))
        });
    }

    sortBooks(field: string) {
        if (this.lastOrdered !== field) {
            this.orderAsc = true;
            this.lastOrdered = field;
        }
        switch (field) {
            case "id":
                this.books.sort((a, b) => ((this.orderAsc ? a.id < b.id : a.id > b.id) ? -1 : 1));
                break;
            case "name":
                this.books.sort((a, b) => ((this.orderAsc ? a.name < b.name : a.name > b.name) ? -1 : 1));
                break;
            case "author":
                this.books.sort((a, b) => ((this.orderAsc ? a.author < b.author : a.author > b.author) ? -1 : 1));
                break;
            default:
        }
        this.orderAsc = !this.orderAsc;
    }
}