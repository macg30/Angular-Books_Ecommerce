import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { element } from 'protractor';

interface Resource {
  title:string
  abstract:string
}

class Book implements Resource {
  isbn:string
  title:string
  abstract:string
  price:number 

  constructor(isbn:string, title:string, abstract:string, price:number){
      this.isbn = isbn;
      this.title = title;
      this.abstract = abstract;
      this.price = price;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BookManagamentService {

  key:string = 'BookList'

  constructor() { }

  //ADD
  public addbook(book:Book) {
    let bookList:Book[];
    let sbookList = localStorage.getItem(this.key);

    if (sbookList) {

      bookList = JSON.parse(sbookList);
      bookList.push(book);
      localStorage.setItem(this.key, JSON.stringify(bookList));

    } else {
      bookList = [book];
      localStorage.setItem(this.key, JSON.stringify(bookList));
    }

  }

  //READ ALL
  public readBookList() {
    let bookList:Book[];
    let sbookList = localStorage.getItem(this.key);

    if (sbookList) {
      bookList = JSON.parse(sbookList)
    } else {
      bookList = null;
    }

    return bookList;
  }

  //READ
  public readBook(isbn:string){
    let bookList:Book[];
    let book:Book;

    try {
      bookList = this.readBookList();
      if(bookList){
        book = bookList.find( (bookItem) => bookItem.isbn === isbn);
      }
      
    } catch (error) {
      console.error(error);
    } finally 
    {
      return book;
    }
  }

  //MODIFY
  public modifyBook(isbn:string, book:Book){

    let bookList:Book[] = this.readBookList();

    let aux = 0
    let index;

    bookList.forEach( bookItem => {

      if (bookItem.isbn === isbn) {
        index = aux;
      }
      else{
        aux++;
      }
    });

    bookList.splice(index,1,book)
    localStorage.setItem(this.key, JSON.stringify(bookList));
    console.log('Se modifico el libro correspondiente')
  }

  //DELETE
  public deleteBook(isbn:string) {
    let bookList:Book[] = this.readBookList();

    let aux = 0
    let index;

    bookList.forEach( bookItem => {

      if (bookItem.isbn === isbn) {
        index = aux
      }
      else{
        aux++;
      }
    });

    bookList.splice(index,1);
    localStorage.setItem(this.key, JSON.stringify(bookList));
    console.log('Se elimino el libro correspondiente')

  }

  //InitialLoad
  public initialLoad() {

    const books:Book[] = [
      {
        title: 'Pro Angular 9: Build Powerful and Dynamic Web Apps',
        abstract: 'The fourth edition of this popular, full-color guide explains how to get the most from Angular, starting with an in-depth overview of the MVC pattern and presenting the range of benefits it can offer. From there, you will begin learning how to use Angular in your projects, starting with the nuts-and-bolts concepts, and progressing on to more advanced and sophisticated features. Each topic in this full-color book provides you with precisely enough learning and detail to be effective. In true Adam Freeman style, the most important features are given full court press treatment, while also addressing common problems and how to avoid them.        ',
        isbn: '1484259971',
        price: 36.05
      },
      {
        title: 'Angular desde 0: Un enfoque práctico',
        abstract: 'Con el auge de las tecnologías web, actualmente se tiene un mercado muy activo con muy poderosas herramientas de desarrollo, que aumentan los tiempos de desarrollo. Teniendo en este momento el Framework Angular, que ha evolucionado rapidamente, estando actualmente en su versión 7, encaminandose a la 8, entregando nuevas y mas interesantes funcionalidades.        ',
        isbn: 'B07NZDVNMS',
        price: 14.95
      },
      {
        title: 'Learning Angular: A no-nonsense beginners guide to building web applications with Angular 10 and TypeScript, 3rd Edition',
        abstract: 'Angular, loved by millions of web developers around the world, continues to be one of the top JavaScript frameworks thanks to its regular updates and new features that enable fast, cross-platform, and secure frontend web development. With Angular, you can achieve high performance using the latest web techniques and extensive integration with web tools and integrated development environments (IDEs)',
        isbn: '1839210664',
        price: 28.60
      }
    ];

    books.forEach(book => {
      this.addbook(book);
    });
  }

}
