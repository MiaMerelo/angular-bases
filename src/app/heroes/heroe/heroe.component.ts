import {Component} from "@angular/core"

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})

export class HeroeComponent{
    nombre: string = "Ironman";
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambioNombre(): void{
        this.nombre = "Spiderman";
    }

    cambioEdad(): void{
        this.edad = 20;
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }
}