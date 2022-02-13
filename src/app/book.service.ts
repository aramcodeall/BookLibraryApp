import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';

@Injectable()
export class BooksService {

    private url = "https://retoolapi.dev/pX75pi/Books";
    constructor(private http: HttpClient) { }

    getBooks() {
        return this.http.get<Array<Book>>(this.url);
    }

    createBook(book: Book) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<Book>(this.url, JSON.stringify({ name: book.name, author: book.author }), { headers: myHeaders });
    }
    deleteBook(id: string) {

        return this.http.delete<Book>(this.url + '/' + id);
    }
}