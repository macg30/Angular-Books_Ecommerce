import { Component, OnInit ,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { BookManagamentService } from '../services/book-managament.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';


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

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  booklist: Book[]
  header: string[]
  dataSource: MatTableDataSource<Book>;
  moneyType: string[];
  selectedType:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private bookManagament:BookManagamentService) {
    this.header = ['isbn','title', 'price', 'actions'];

    this.refreshBookList();
   }

  ngOnInit(): void {
    this.moneyType = [
      'EUR', 'USD', 'GBP'
    ];

    this.selectedType = 'EUR';

    //filter for ISBN
    this.dataSource.filterPredicate = (data: Book, filter: string) => {
      console.log(data.isbn)
      return data.isbn == filter;
     };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue:string = (event.target as HTMLInputElement).value;
    console.log(filterValue);

    this.dataSource.filter = filterValue.toString();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //CRUD
  deleteBook(isbn:string) {
    this.bookManagament.deleteBook(isbn)

    this.refreshBookList();
  }

  refreshBookList() {
    this.booklist = this.bookManagament.readBookList();
    this.dataSource = new MatTableDataSource(this.booklist);
  }

  

}
