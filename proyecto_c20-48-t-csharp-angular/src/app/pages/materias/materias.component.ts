import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  progreso = 70; // Definir el progreso completado como 70%

  constructor() { }

  ngOnInit(): void {
  }

  entregarTarea(): void {
    console.log('Entregar tarea');
    // Lógica para entregar la tarea
  }

  verCalificaciones(): void {
    console.log('Ver calificaciones');
    // Lógica para ver calificaciones
  }

  foroDeDiscusion(): void {
    console.log('Foro de discusión');
    // Lógica para abrir el foro de discusión
  }
}
