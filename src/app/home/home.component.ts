import { Component, OnInit } from '@angular/core';
import { BookManagamentService } from '../services/book-managament.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookManagament:BookManagamentService) { }

  ngOnInit(): void {
  }

  loadBooks(){
    this.bookManagament.initialLoad();
  }
}
