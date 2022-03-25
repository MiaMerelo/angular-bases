import {Component} from "@angular/core"

@Component({
    selector: "app-contador",
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="sumaResta(base);"> + {{base}} </button>

        <span>{{numero}}</span>

        <button (click)="sumaResta(-base);"> - {{base}} </button> 
    `
})
export class ContadorComponent{
    titulo: string = 'Acumulador App';
    numero: number = 0;
    base: number = 5;

    sumaResta(valor: number){
        this.numero += valor;
  }
}