import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { RouterModule } from '@angular/router';
import { SortPipe } from './sort-pipe';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: BookListComponent, pathMatch: 'full' },
            { path: 'add', component: BookAddComponent }
        ])
    ],
    declarations: [AppComponent, BookListComponent, BookAddComponent, SortPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }