import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, refCount  } from 'rxjs/operators';

@Pipe({
  name: 'exRate'
})
export class ExRatePipe implements PipeTransform {

  private readonly ratesApi = 'https://api.exchangeratesapi.io/latest?symbols=';
  private readonly rate:number = 1;

  constructor(private httpClient: HttpClient) {
  }


  transform(euros: number, symbol: string): number | Observable<number> {
    if(!symbol) {
      console.log('Se mantiene la moneda');
      return euros;
    }
    else if ( symbol === 'EUR') {
      console.log('Se mantiene la moneda');
      return euros;
    }
    else
    {
      return this.getCotizacionesOnline$(symbol).pipe(
        map(rate => euros * rate)
      );
    }
    ;
  }

  private getCotizacionesOnline$(symbol:string){
    const ratesURL = this.ratesApi + symbol;
    console.log('Se hace una conversion a ' + symbol)
    return this.httpClient.get<any>(ratesURL).pipe(
      shareReplay(1),
      //refCount(),
      map(resp => resp.rates[symbol])
    )
  }

}