import { Component} from '@angular/core';

@Component({
  selector: 'app-listado-alumno-a',
  templateUrl: './listado-alumno-a.component.html',
  styleUrls: ['./listado-alumno-a.component.css']
})
export class ListadoAlumnoAComponent {


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

