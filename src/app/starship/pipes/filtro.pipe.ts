import { Pipe, PipeTransform } from '@angular/core';
import { Nave } from '../interface/nave.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  page

  transform(naves: Nave[], page:number = 0): Nave[] {
    return naves.slice(page, page+5);
  }

}
