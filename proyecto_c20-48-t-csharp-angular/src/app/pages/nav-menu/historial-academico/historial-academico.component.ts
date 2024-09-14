import { Component, OnInit } from '@angular/core';

// Definición del modelo AcademicRecord dentro del mismo archivo del componente
interface AcademicRecord {
  id: number;
  subject: string;
  teacher: string;
  grade: string;
  feedback: string;
}

@Component({
  selector: 'app-historial-academico',
  templateUrl: './historial-academico.component.html',
  styleUrls: ['./historial-academico.component.css']
})
export class HistorialAcademicoComponent implements OnInit {

  // Lista de registros académicos (simulada)
  academicRecords: AcademicRecord[] = [
    {
      id: 1,
      subject: 'Matemáticas',
      teacher: 'Profesor García',
      grade: 'A',
      feedback: 'Excelente desempeño en el curso.'
    },
    {
      id: 2,
      subject: 'Lengua',
      teacher: 'Profesor López',
      grade: 'B+',
      feedback: 'Buen esfuerzo, sigue así.'
    },
    {
      id: 3,
      subject: 'Historia',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 4,
      subject: 'Inglés',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 5,
      subject: 'Fisica',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 6,
      subject: 'Administración',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 7,
      subject: 'Economía',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 8,
      subject: 'Sociología',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 9,
      subject: 'Ética',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 10,
      subject: 'Química',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 11,
      subject: 'Geografía',
      teacher: '',
      grade: '',
      feedback: ''
    },
    {
      id: 12,
      subject: 'Programación',
      teacher: '',
      grade: '',
      feedback: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
    // Si deseas obtener los registros de una API o servicio, puedes hacerlo aquí
  }

}
