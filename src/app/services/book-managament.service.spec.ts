import { TestBed } from '@angular/core/testing';

import { BookManagamentService } from './book-managament.service';

describe('BookManagamentService', () => {
  let service: BookManagamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManagamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
