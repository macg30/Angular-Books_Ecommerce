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

}
