import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookManagamentService } from 'src/app/services/book-managament.service';

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
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  public book:Book;

  constructor(private bookManagament:BookManagamentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.book = this.bookManagament.readBook(isbn);
  }

}
