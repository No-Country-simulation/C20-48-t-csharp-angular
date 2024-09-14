import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-de-alumnos',
  templateUrl: './listado-de-alumnos.component.html',
  styleUrls: ['./listado-de-alumnos.component.css']
})
export class ListadoDeAlumnosComponent  {

  alumnos= [
    { id: 1, nombre: 'Juan Pérez', notas: { corte1: 0, corte2: 0, corte3: 0 } },
    { id: 2, nombre: 'Ana Gómez', notas: { corte1: 0, corte2: 0, corte3: 0 } },
    // ... Agrega más alumnos aquí
    { id: 16, nombre: 'Carlos Mendoza', notas: { corte1: 0, corte2: 0, corte3: 0 } }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigateToNotas(id: number) {
    this.router.navigate(['/agregar-notas', id]);
  }



}
