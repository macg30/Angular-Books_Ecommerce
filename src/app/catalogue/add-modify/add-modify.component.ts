import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
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
  selector: 'app-add-modify',
  templateUrl: './add-modify.component.html',
  styleUrls: ['./add-modify.component.css']
})
export class AddModifyComponent implements OnInit {

  public formGroup: FormGroup;
  private new: boolean;
  private parameter:Book;
  public action:string;

  constructor(private formBuilder:FormBuilder, private bookManagament:BookManagamentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');

    this.parameter = this.bookManagament.readBook(isbn);

    if (this.parameter) {
      this.new = false
      this.action = "Modificar";
    } else {
      this.new = true;
      this.action = "Añadir";
    }

    this.buildForm();
  }

  private buildForm() {
    let phTitle;
    let phAbstract;
    let phIsbn;
    let phPrice;

    if (this.new) {
      phTitle = '';
      phAbstract = '';
      phIsbn = '';
      phPrice = 0;
    } else {
      phTitle = this.parameter.title;
      phAbstract = this.parameter.abstract;
      phIsbn = this.parameter.isbn;
      phPrice = this.parameter.price;
    }


    //Form builder
    this.formGroup = this.formBuilder.group({
      title: [phTitle, [Validators.required]],
      abstract: [phAbstract,[Validators.required]],
      isbn: [phIsbn,[Validators.required, Validators.minLength(10)]],
      price: [phPrice,[Validators.required,this.validatePrice]]
    });
    
  }

  private validatePrice(control:AbstractControl){
    
    const isbn = control.value;
    let error = null;

    console.log('Se esta validando el precio')

  }

  public getError(controlName:string):string{
    let error = '';
    const control = this.formGroup.get(controlName);

    if (control.touched && control.errors != null){
      error = JSON.stringify(control.errors);
    }

    return error;
  }

  public onSubmit() {
    const title = this.formGroup.get('title').value;
    const abstract = this.formGroup.get('abstract').value;
    const isbn = this.formGroup.get('isbn').value;
    const price = this.formGroup.get('price').value;

    const book = {
      title: title,
      abstract: abstract,
      isbn: isbn,
      price: price
    }

    if (this.new) {
      this.bookManagament.addbook(book)
      console.log('Se añade un nuevo libro')
    } 
    else {
      this.bookManagament.modifyBook(this.parameter.isbn,book)
      console.log('Se modifica un libro existente')
    }

    this.router.navigate(['/catalogue']);
    
  }


  

}
