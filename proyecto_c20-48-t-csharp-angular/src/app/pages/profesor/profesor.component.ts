import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {

  listaEstudiantes: any[] = [
    {nombre: "Tomas Fernandez", estado: "excento"},
    {nombre: "Edu Villa", estado: "excento"},
    {nombre: "Marta Perez", estado: "reprobado"},
    {nombre: "Carlos Lara", estado: "reprobado"},
    {nombre: "Val Uzal", estado: "excento"},
    {nombre: "Val Uzal", estado: "excento"}
  ]

  mostrar = true

  toogle(): void{
    this.mostrar = !this.mostrar
  }

}
