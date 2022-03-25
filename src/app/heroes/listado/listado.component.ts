import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ["Irnonman", "Spiderman", "Hulk", "Thor", "El Capi"];
  heroesBorrados: string[] = [];
  check: number = 2;

  checkResta(): void {
    if(this.check == 2){
      this.check -= 1;
    }
    if(this.heroes.length == 0){
      this.check = 0;
    }
  }

  borrarHeroe(): void{
    if(this.heroes.length > 0){
      const heroeBorrado: string = this.heroes.shift() || "";
      this.heroesBorrados.unshift(heroeBorrado);
    }
  }
}
